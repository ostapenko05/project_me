<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Блок "Обо мне"
        button.about-page__add-new() Добавить группу
    .about-page__content
      .container.container--mobile-wide
        ul.slill-list
          li.skill-list__item()
            form(@submit.prevent="addNewCategory")
              .skill__name-wrapper
              input(type="text" v-model="title" placeholder="Название новой группы").skill__name-input
              button(type="submit").skill__name
            //- hr.skill__name-line
            //- .skill__name-control
            //-   button(type="button").slill__btn-checked
            //-   button(type="button").slill__btn-x
            //- hr.skill__line-opacity
            //- .skill__input
            //-   input(type="text"  placeholder="Новый навык").skill__name-input
            //-   input(type="text"  placeholder="100%").skill__name-input
            //-   button(type="submit").about-page__add-new
            hr

</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
  components: {
    skillsGroup: () => import("../skills-group")
  },
  data: () => ({
    title: ""
  }),

  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    }),
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title)
      } catch (error) {
        alert(error.message);
        ///alert заменить на модалку
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.skill-container {
  border: 1px solid black;
  padding: 10px;
}
.about-page__title {
  display: flex;
  align-items: center;
  margin: 30px 0;
  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.about-page__add-new {
  background: transparent;
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}

.about-page__butn {
  background: transparent;
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  background: #fff;
  box-shadow: grey 0.5 0.5 0.5 0.5;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}

.skill__name {
  margin-left: 30px;
  height: 40px;
  &:nth-child(0) {
    opacity: 0.5;
  }
}
/* 
.line-1 {
  width: 60%;
  margin-left: 30px;
  text-align: left;
}

.skill__name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.skill__title-new {
  opacity: 0.4;
}

.skill__title-control {
  display: flex;
  align-items: center;
  width: 60px;
  height: 40px;
}

.line-2 {
  width: 90%;
  margin-left: 30px;
  text-align: left;
  opacity: 0.3;

}

.checkbox__input {
  position: absolute;
  visibility: hidden;
 
}

.checkbox__mark {
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: center;
  border-radius: 0.1rem;
  cursor: pointer;

}

.checkbox__input:checked + .checkbox__mark {
  &::after {
    content: "";
    position: absolute;
    left: 30%;
    top: -20%;
    width: 0.25rem;
    height: 0.4rem;
    transform: rotate(45deg);
    border: 0.1rem solid green;
    border-top-color: transparent;
    border-left-color: transparent;
  }
}

.control__x {
  position: relative;
  height: 100%;
  width: 100%;
}

.menu__hover-line,
.menu__hover-line::after,
.menu__hover-line::before {
  position: absolute;
  height: 2px;
  width: 10px;
  background:crimson;
  border-radius: 2px;
  cursor: pointer;
}

.menu__hover-line {
  top: 70%;
  right: 40%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  cursor: pointer;
}

.menu__hover-line::after {
  content: "";
  top: -0.75rem;
}

.menu__hover-line::before {
  content: "";
  top: 0.75rem;
}

.menu__hover-line::before {
  top: 0;
  transform: rotate(45deg);
}

.menu__hover-line::after {
  top: 0;
  transform: rotate(-45deg);
} */
</style>