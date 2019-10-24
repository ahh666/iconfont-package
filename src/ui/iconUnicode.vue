<template>
  <div>
    <span class="iconfont" v-html="name"></span>
    <slot></slot>
  </div>
</template>
   
<script>
export default {
  name: 'iconUnicode',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@font-face {
  /* Unicode  */
  font-family: "iconfont";
  src: url("../assets/iconfont/iconfont.eot");
  src: url("../assets/iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../assets/iconfont/iconfont.woff2") format("woff2"),
    url("../assets/iconfont/iconfont.woff") format("woff"),
    url("../assets/iconfont/iconfont.ttf") format("truetype"),
    url("../assets/iconfont/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 2em;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
