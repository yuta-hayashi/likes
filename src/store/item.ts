import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import Item from "@/models/Item";
import store from "@/store/index";
import firebase from "@/firebase";

const ref = firebase.firestore().collection("userData");
const storage = firebase.storage;

type newItem = { name: string; imgUrl: string; uid: string };
type idState = { id: number; toBuy: boolean; date: Date };
type newName = { id: number; name: string };

export interface InItemsState {
  items: Item[];
  nextId: number;
}

@Module({
  dynamic: true,
  store,
  name: "item",
  namespaced: true
})
class Items extends VuexModule implements InItemsState {
  items: Item[] = [];
  nextId = 0;
  isLoading = true;

  @Mutation
  setNextId(id: number) {
    this.nextId = id + 1;
  }

  @Mutation
  pushItem(newItem: Item) {
    this.items.push(newItem);
  }

  @Mutation
  changeStatus(idState: idState) {
    const target = this.items.find((item) => {
      return item.id == idState.id;
    });
    target!.toBuy = idState.toBuy;
    if (!idState.toBuy) {
      if (target!.history == undefined) {
        target!.history = [];
      }
      target!.history.push(idState.date);
    }
  }

  @Mutation
  updateName(newName: newName) {
    const target = this.items.find((item) => {
      return item.id == newName.id;
    });
    target!.name = newName.name;
  }

  @Mutation
  deleteElement(index: number) {
    this.items.splice(index, 1);
  }

  @Mutation
  changeLoading() {
    this.isLoading = false;
  }

  @Action
  addItem(value: newItem) {
    const newItem: Item = {
      id: this.nextId,
      name: value.name,
      imgUrl: value.imgUrl,
      toBuy: false,
      createdAt: new Date(),
      history: []
    };
    ref
      .doc(value.uid)
      .collection("items")
      .doc(newItem.id.toString())
      .set(newItem)
      .then(() => {
        console.log("add firestore");
      })
      .catch((error) => console.error(error));
    this.pushItem(newItem);
  }

  @Action({ rawError: true })
  changeToBuy(idState: { id: number; toBuy: boolean }) {
    const date = new Date();
    this.changeStatus({ id: idState.id, toBuy: idState.toBuy, date: date });
    ref
      .doc(this.context.rootState.user.uid)
      .collection("items")
      .doc(idState.id.toString())
      .update({ toBuy: idState.toBuy })
      .then(() => {
        console.log("updated");
      })
      .catch((error) => console.error(error));
  }

  @Action
  changeName(newName: newName) {
    this.updateName(newName);
    ref
      .doc(this.context.rootState.user.uid)
      .collection("items")
      .doc(newName.id.toString())
      .update({ name: newName.name })
      .then(() => {
        console.log("updated");
      })
      .catch((error) => console.error(error));
  }

  @Action
  deleteItem(id: number) {
    const targetIndex = this.items.findIndex((item) => {
      return item.id == id;
    });
    const url = this.items[targetIndex].imgUrl;
    storage()
      .refFromURL(url)
      .delete()
      .then(() => console.info("deleted"))
      .catch((error) => console.error(error));
    this.deleteElement(targetIndex);
    ref
      .doc(this.context.rootState.user.uid)
      .collection("items")
      .doc(id.toString())
      .delete()
      .then(() => console.log("deleted", id))
      .catch((error) => console.error("firebase error", error));
  }

  @Action({ rawError: true })
  getFireStore() {
    ref
      .doc(this.context.rootState.user.uid)
      .collection("items")
      .where("id", ">", this.nextId)
      .orderBy("id", "asc")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.pushItem(doc.data() as Item);
        });
        if (this.items.length != 0) {
          const endElm = this.items.slice(-1)[0];
          this.setNextId(endElm.id);
        }
        this.changeLoading();
      });
  }
}
export const itemsModule = getModule(Items);
