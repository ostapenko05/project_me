<template lang="pug">
  section.tabs-container
    .tabs-container
      .container
        ul.tabs
          li.tabs__item
            router-link(to="/" tag="button").tabs__link Обо мне
          li.tabs__item
            router-link(to="/works" tag="button").tabs__link Работы
          li.tabs__item
            router-link(to="/reviews" tag="button").tabs__link Отзывы
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    };
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.tabs-container {
  background: #fff;
}
.tabs {
  display: flex;
  height: 77px;
  margin-bottom: 20px;
  @include phones {
    height: 87px;
  }
}
.tabs__item {
  height: 100%;
  margin-right: 30px;
  background: transparent;
  /* color: black; */
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
  border: 0 0 0 0 transparent;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  background: transparent;
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
    border: 0 0 3px 0;
    border-color: currentColor;
  }
}
</style>