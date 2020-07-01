<template>
  <div>
    <SettingProfileInfo :name="name" :email="email" />
    <RadiusButton color="secondary" @push="signOut">Sign Out</RadiusButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "@/store/user";
import firebase from "@/firebase";
import SettingProfileInfo from "@/components/molecules/SettingProfileInfo.vue";
import RadiusButton from "@/components/atoms/RadiusButton.vue";

@Component({
  components: { SettingProfileInfo, RadiusButton }
})
export default class SettingTemp extends Vue {
  mounted() {
    document.title = `Likes - Setting`;
  }
  get name() {
    return userModule.name;
  }
  get email() {
    return userModule.email;
  }

  signOut() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("singout");
          userModule.signOut();
        })
        .catch((error) => console.error(error));
    });
  }
}
</script>
