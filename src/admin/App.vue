<template lang="pug">
  div.root-wrapper-container
    div.root-container
      .content-container
      headeradmin
      tabsadmin
      router-view
     
</template>

<script>
import headeradmin from './components/header';
import tabsadmin from './components/tabs';

export default {
  name: "app",
  components: {
    headeradmin,
    tabsadmin,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
button {
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  background-color: $text-color;
}
.root-wrapper-container {
  height: 100%;
}
.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;
  @include phones {
    padding: 20px 0;
  }
}
.root-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.admin-wrapper {
  display: flex;
  .maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}
.content-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -20;
  margin-top: 20px;
  background: url("~images/content/up-tablets.png") center center no-repeat / cover;
  /* opacity: .3; */
  @include phones {
    padding-top: 30px;
  }
}
.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}
</style>