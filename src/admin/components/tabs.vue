<template lang="pug">
  section.tabs-container
    .tabs-container
      .container
        ul.tabs
          - var tabs = ["Обо мне", "Работы", "Отзывы"]
            each item in tabs
              li.tabs__item
                a(href="").tabs__link #{item}
  //- .tabs-container
  //-   .container
  //-     ul.tabs
  //-       li.tabs__item(v-for="tab in tabs")
  //-         router-link(
  //-           :data-text="tab.title" 
  //-           :to="tab.href"
  //-           exact-active-class="active"
  //-         ).tabs__link

</template>

<script>
// export default {
//   data() {
//     return {
//       tabs: [
//         { title: "Обо мне", href: "/" },
//         { title: "Отзывы", href: "/reviews" },
//         { title: "Работы", href: "/works" }
//       ]
//     };
//   }
// };
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.tabs-container {
  background: #fff;
}
.tabs {
  display: flex;
  height: 77px;
  /* background: #383bcf; */
  @include phones {
    height: 87px;
  }
}
.tabs__item {
  height: 100%;
  margin-right: 30px;
  color: black;
  @include phones {
    margin-right: 3px;
  }
  &:last-child {
    margin-right: 0;
  }
}
.tabs__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  @include phones {
    width: 100px;
  }
  &:before {
    content: attr(data-text);
  }
  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}
</style>