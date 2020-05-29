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

type newItem = { name: string; imgUrl: string; uid: string };
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

  @Mutation
  setNextId(id: number) {
    this.nextId = id + 1;
  }

  @Mutation
  pushItem(newItem: Item) {
    this.items.push(newItem);
  }

  @Mutation
  changeStatus(id: number) {
    const target = this.items.find((item) => {
      return item.id == id;
    });
    if (target) {
      target.toBuy = !target.toBuy;
    }
  }

  @Mutation
  deleteElement(id: number) {
    const target = this.items.findIndex((item) => {
      return item.id == id;
    });
    this.items.splice(target, 1);
  }

  @Action
  addItem(value: newItem) {
    const newItem: Item = {
      id: this.items.length + 1,
      name: value.name,
      imgUrl: value.imgUrl,
      toBuy: false,
      createdAt: new Date()
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

  @Action
  changeToBuy(id: number) {
    this.changeStatus(id);
  }

  @Action
  deleteItem(id: number) {
    this.deleteElement(id);
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
    console.log(this.context.rootState.user.uid);
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
        const endElm = this.items.slice(-1)[0];
        this.setNextId(endElm.id);
      });
  }
}
export const itemsModule = getModule(Items);
