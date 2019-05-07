<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconTag"></use>
    </svg>
    <slot></slot>
  </div>
</template>
   
<script>
import "../assets/iconfont/iconfont.js";
export default {
  name: "iconSymbol",
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconTag() {
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
