<template>
  <div class="box">
    <i-symbol name="fanhuidingbu">Symbol</i-symbol>
    <i-font name="fanhuidingbu">Font class</i-font>
    <i-unicode name="&#xe633;" style="font-size:30px;color:#333">Unicode</i-unicode>
  </div>
</template>
   
<script>
// 局部引入并使用
import iSymbol from "../ui/iconSymbol"
import iFont from "../ui/iconFontClass"
// import iUnicode from "../ui/iconUnicode"

export default {
  components: {
    iSymbol,
    iFont
  }
};
</script>

<style scoped>
.box{
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  padding: 30px;
  background-color: cadetblue;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
