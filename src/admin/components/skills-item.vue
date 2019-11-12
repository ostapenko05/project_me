<template lang="pug">
  tr()
    td {{skill.title}}
    td {{skill.percent}}
    td 
      button(type="button" @click="removeExistedSkill") удалить
      button(type="button" ) изменить
  
  //- tr(v-else)
  //-   td 
  //-     input(type="text" v-model="editedSkill.title")
  //-   td 
  //-     input(type="text" v-model="editedSkill.percent")
  //-   td 
  //-     button(type="button" @click="save") сохранить
  //-     button(type="button" @click="editmode = false") отменить

</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    skill: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {
        
      }
    },
  }
};
</script>