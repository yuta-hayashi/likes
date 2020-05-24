import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store/index";

type uidName = {
  uid: string;
  name: string;
};

export interface InUserState {
  uid: string;
  name: string;
  isSign: boolean;
}

@Module({ dynamic: true, store, name: "user", namespaced: true })
class User extends VuexModule implements InUserState {
  uid = "";
  name = "";
  isSign = false;

  @Mutation
  changeUser(value: uidName) {
    this.uid = value.uid;
    this.name = value.name;
    this.isSign = true;
  }

  @Mutation
  logout() {
    this.uid = "";
    this.name = "";
    this.isSign = false;
    // firebaseの処理
  }

  @Action
  signUp(value: uidName) {
    console.log("action's name:", value.name);
    this.changeUser(value);
  }
}
export const userModule = getModule(User);
