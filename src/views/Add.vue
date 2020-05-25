<template>
  <div>
    <img :src="newImage.url[0]" />
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
import Compressor from "compressorjs";

@Component
export default class AddPage extends Vue {
  newName = "";
  get uid(): string {
    console.log(userModule.isSign);
    return userModule.uid;
  }

  newImage: {
    name: string;
    url: string[];
    file: Blob | null;
  } = {
    name: "",
    url: [],
    file: null
  };
  add() {
    if (this.newImage.url !== null) {
      const storage = firebase.storage().ref();
      const mount = storage.child(`${this.uid}/${this.newImage.name}`);
      mount.putString(this.newImage.url[0], "data_url").then((res) => {
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
    const compressedImg = this.newImage.url;
    const file = e.target.files;
    if (file[0] !== undefined) {
      this.newImage.name = file[0].name;
      const payload: Compressor.Options = {
        quality: 0.7,
        maxWidth: 500,
        maxHeight: 500,
        mimeType: "image/jpeg",
        success(blob: Blob): void {
          const reader = new FileReader();
          reader.onloadend = () => {
            const result = reader.result;
            if (result instanceof ArrayBuffer || result === null) return;
            compressedImg.push(result);
          };
          reader.readAsDataURL(blob);
        },
        error(err: Error): void {
          console.log(err.message);
        }
      };
      new Compressor(file[0], payload);
    }
  }
}
</script>
