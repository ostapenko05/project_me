<template lang="pug">
  .skill-container
    h2 {{category.category}}
    hr
    table
      skillItem(
        v-for="skill in category.skills"
        :key="skill.id"
        :skill="skill"
      )
    hr
    form(
      @submit.prevent="addNewSkill"
      :class={blocked: formBlocked}
    ).add-skill-wrapper
      input(type="text" placeholder="Имя" v-model="skill.title")
      input(type="text" placeholder="Проценты" v-model="skill.percent")
      button(type="submit") Добавить
    //-   skills-item(
    //-     v-for="skill in skills"
    //-     :key="skill.id"
    //-     :skill="skill"
    //-   )
    //- hr
    //- .add-skill-wrapper.blocked
    //-   input(type="text" v-model="skill.title" placeholder="Добавить скилл")
    //-   input(type="text" v-model="skill.percent" placeholder="Проценты")
    //-   button(type="button" @click="addNewSkill") Добавить
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillItem: () => import("./skills-item")
  },
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      formBlocked: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    };
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.formBlocked = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        //// вывести и обработать ошибку, tooltip или ещё что-то
      } finally {
        this.formBlocked = false;
      }
    }
  }
};
// import { mapActions } from "vuex";
// export default {
//   props: {
//     category: Object,
//     skills: Array,
//   },
//   data() {
//     return {
//       skill: {
//         category: this.category.id,
//         title: "",
//         percent: ""
//       }
//     }
//   },
//   components: {
//     skillsItem: () => import("../components/skills-item")
//   },
//   methods: {
//     ...mapActions('skills', ['addSkill']),
//     async addNewSkill() {
//       try {
//         await this.addSkill(this.skill);
//       } catch (error) {
//         // error
//       }
//     }
//   }
// };
</script>

<style lang="postcss" scored>
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
  /* background: #bbbbbb; */
}

/* .skill-list__item {
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
} */
</style>