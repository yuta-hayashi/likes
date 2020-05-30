<template>
  <div>
    <BackButton />
    <div class="input_form">
      <input
        id="file_select"
        type="file"
        ref="image"
        accept="image/*"
        @change="imgSelect"
      />
      <div class="select_label">
        <label for="file_select">
          <Card
            class="card_big"
            :imgUrl="newImage.url[newImage.url.length - 1]"
            size="big"
            :toBuy="false"
          />
        </label>
      </div>
      <input id="name_input" type="text" placeholder="name" v-model="newName" />
      <br />
      <button
        class="button button_primary"
        @click="add"
        :disabled="!possibleAdd"
      >
        追加
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { itemsModule } from "@/store/item";
import { userModule } from "@/store/user";
import firebase from "@/firebase";
import Compressor from "compressorjs";
import BackButton from "@/components/BackButton.vue";
import Card from "@/components/Card.vue";

const CameraImg =
  "data:image/png;base64,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";
@Component({
  components: {
    BackButton,
    Card
  }
})
export default class AddPage extends Vue {
  newName = "";
  get uid(): string {
    console.log(userModule.isSign);
    return userModule.uid;
  }

  get possibleAdd(): boolean {
    if (this.newImage.url.length > 1) return true;
    return false;
  }

  newImage: {
    name: string;
    url: string[];
  } = {
    name: "",
    url: [CameraImg]
  };
  add() {
    if (this.newImage.url.length !== 0) {
      const storage = firebase.storage().ref();
      const mount = storage.child(`${this.uid}/${this.newImage.name}`);
      mount
        .putString(this.newImage.url[this.newImage.url.length - 1], "data_url")
        .then((res) => {
          res.ref.getDownloadURL().then((url) => {
            itemsModule.addItem({
              name: this.newName,
              imgUrl: url,
              uid: this.uid
            });
          });
        });
    } else {
      itemsModule.addItem({ name: this.newName, imgUrl: "", uid: this.uid });
    }
    this.$analytics.logEvent("add_item");
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

<style scoped>
#file_select {
  display: none;
}
.select_label {
  margin: 0 auto;
  width: 270px;
}
.card_big {
  margin: 30px auto;
}

#name_input {
  width: 240px;
  padding: 10px 15px;
  margin: 30px auto;
  font-size: 18px;
  font-weight: lighter;
  border-radius: 16px;
  border-color: #00000000;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
}
#name_input:focus {
  outline: none;
}
</style>
