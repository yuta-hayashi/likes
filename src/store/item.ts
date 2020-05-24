import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import Item from "@/models/Item";
import store from "@/store/index";

export interface InItemsState {
  items: Item[];
  nextId: number;
}

@Module({ dynamic: true, store, name: "counter", namespaced: true })
class Items extends VuexModule implements InItemsState {
  items: Item[] = [
    { id: 1, name: "hoge", imgUrl: "goo", createdAt: new Date(), toBuy: false }
  ];
  nextId = 1;

  @Mutation
  pushItem(newItem: Item) {
    this.items.push(newItem);
  }

  @Action
  addItem(name: string, imgUrl: string) {
    const newItem: Item = {
      id: this.nextId,
      name: name,
      imgUrl: imgUrl,
      toBuy: false,
      createdAt: new Date()
    };
    this.pushItem(newItem);
  }
}
export const itemsModule = getModule(Items);
