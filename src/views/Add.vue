<template>
  <div>
    <img :src="newImage.url" />
    <input type="file" ref="image" accept="image/*" @change="imgSelect" />
    <input type="text" placeholder="name" v-model="newName" />
    <button @click="add">OK</button>
    uid:{{ uid }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { itemsModule } from "@/store/item";
import { userModule } from "@/store/user";
import firebase from "@/firebase";

@Component
export default class AddPage extends Vue {
  newName = "";
  get uid(): string {
    console.log(userModule.isSign);
    return userModule.uid;
  }

  newImage: {
    name: string;
    url: null | string | ArrayBuffer;
    file: File | null;
  } = {
    name: "",
    url: null,
    file: null
  };
  add() {
    if (this.newImage.file !== null) {
      const storage = firebase.storage().ref();
      const mount = storage.child(`${this.uid}/${this.newImage.name}`);
      mount.put(this.newImage.file).then((res) => {
        res.ref.getDownloadURL().then((url) => {
          itemsModule.addItem({ name: this.newName, imgUrl: url });
        });
      });
    } else {
      itemsModule.addItem({ name: this.newName, imgUrl: "" });
    }
    this.$router.push("/");
  }

  imgSelect(e: any) {
    console.info("e type->", typeof e);
    const file = e.target.files;
    if (file[0] !== undefined) {
      this.newImage.name = file[0].name;
      const fr = new FileReader();
      fr.readAsDataURL(file[0]);
      fr.addEventListener("load", () => {
        this.newImage.url = fr.result;
        this.newImage.file = file[0];
      });
    }
  }
}
</script>
