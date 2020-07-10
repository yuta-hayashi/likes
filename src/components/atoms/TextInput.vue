<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class TextInput extends Vue {
  @Prop() placeholder?: string;
  @Prop() _value?: string;
  @Prop({ default: "text" }) type?: string;

  get value() {
    return this._value;
  }
  set value(value) {
    this.$emit("change", value);
  }
}
</script>

<style scoped>
.input {
  width: 240px;
  padding: 10px 15px;
  margin: 30px auto;
  font-size: 18px;
  font-weight: lighter;
  border-radius: 16px;
  border-color: #00000000;
  -webkit-appearance: none;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
}

.input:focus {
  outline: none;
}
</style>
