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
}

@Module({
  dynamic: true,
  store,
  name: "item",
  namespaced: true
})
class Items extends VuexModule implements InItemsState {
  items: Item[] = [];

  @Mutation
  pushItem(newItem: Item) {
    this.items.push(newItem);
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
  getFireStore() {
    console.log(this.context.rootState.user.uid);
    ref
      .doc(this.context.rootState.user.uid)
      .collection("items")
      .where("id", ">", this.items.length)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.pushItem(doc.data() as Item);
        });
      });
  }
}
export const itemsModule = getModule(Items);
