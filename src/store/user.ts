import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store/index";

type userInfo = {
  uid: string;
  name: string;
  photoUrl: string;
};

export interface InUserState {
  uid: string;
  name: string;
  photoUrl?: string;
  isSign: boolean;
}

@Module({
  dynamic: true,
  store,
  name: "user",
  namespaced: true
})
class User extends VuexModule implements InUserState {
  uid = "";
  name = "";
  photoUrl = "";
  isSign = false;

  @Mutation
  changeUser(value: userInfo) {
    this.uid = value.uid;
    this.name = value.name;
    this.photoUrl = value.photoUrl;
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
  signUp(value: userInfo) {
    console.log("action's name:", value.name);
    this.changeUser(value);
  }
}
export const userModule = getModule(User);
