import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import Item from "@/models/Item";
import store from "@/store/index";
import firestore from "@/firebase";

const ref = firestore.firestore();

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
  items: Item[] = [
    { id: 0, name: "hoge", imgUrl: "goo", createdAt: new Date(), toBuy: false }
  ];
  nextId = 1;

  @Mutation
  pushItem(newItem: Item) {
    this.items.push(newItem);
    this.nextId += 1;
  }

  @Action
  addItem(value: newItem) {
    const newItem: Item = {
      id: this.nextId,
      name: value.name,
      imgUrl: value.imgUrl,
      toBuy: false,
      createdAt: new Date()
    };
    ref
      .collection("userData")
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
}
export const itemsModule = getModule(Items);
