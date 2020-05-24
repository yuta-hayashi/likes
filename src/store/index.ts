import Vue from "vue";
import Vuex from "vuex";
import { InItemsState } from "@/store/item";

Vue.use(Vuex);

export interface InRootState {
  items: InItemsState;
}

export default new Vuex.Store<InRootState>({});
