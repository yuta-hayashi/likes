import Vue from "vue";
import Vuex from "vuex";
import { InItemsState } from "@/store/item";
import { InUserState } from "@/store/user";

Vue.use(Vuex);

export interface InRootState {
  items: InItemsState;
  user: InUserState;
}

export default new Vuex.Store<InRootState>({});
