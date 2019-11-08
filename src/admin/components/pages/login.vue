<template lang="pug">
  
  .login
    .login__content
      form(
        @submit.prevent="login"
      ).login__form
        .login__form-title Авторизация
        .login__title Логин
        .login__row
          .login__user-icon
          input.login__input(
            title="Логин"
            icon="user"
            v-model="user.name"
          )
        hr.line__input
        .login__title Пароль
        .login__row
          .login__pass-icon
          input.login__input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
          )
        hr.line__input
        .login__btn
          button(
            type="submit"
          ).login__send-data Отправить
      button.login__btn-x
</template>

<script>
import $axios from '../../requests';
export default {
  components: {
    appInput: () => import("../input.vue")
  },
  data:() => ({
    user: {
      name: "",
      password: "",
    }
  }),
  methods: {
    async login() {
      try {
        const reponse = await $axios.post('./login.vue', this.user);
        console.log(Response);
      } catch(error) {

      }
    }
  }
};
// import $axios from "@/requests";
// export default {
//   components: {
//     appInput: () => import("components/input.vue")
//   },
//   data() {
//     return {
//       user: {
//         name: "admin",
//         password: "admin"
//       }
//     };
//   },
//   methods: {
//     async login() {
//       try {
//         const {
//           data: { token }
//         } = await $axios.post("/login", this.user);
//         localStorage.setItem("token", token);
//         $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
//         this.$router.replace("/");
//       } catch (error) {
//         error 
//       }
//     }
//   }
// };
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~images/content/up-tablets.png") center center / cover
    no-repeat;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}

.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 5%;
}

.login__content {
  position: relative;
  @include phones {
    height: 100%;
    width: 100%;
  }
}

.login__title {
  margin-left: 40px;
  opacity: .5;
}

.login__row {
  text-align: center;
  display: flex;
  flex-direction: row;
}

.login__input {
  width: 100%;
  margin-left: 10px;
  border: transparent;
  text-decoration: none;
}

.line__input {
  width: 100%;
  margin-bottom: 5%;
}

.login__user-icon {
  width: 25px;
  height: 25px;
  display: block;
  background: svg-load('user.svg' fill=$text-color) center center / contain no-repeat;
  opacity: .5;
}

.login__pass-icon {
  width: 25px;
  height: 25px;
  display: block;
  background: svg-load('key.svg' fill=$text-color) center center / contain no-repeat;
  opacity: .5;
}

.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}

.login__send-data {
  width: 100%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 6px 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}

.login__form {
  position: relative;
  width: 563px;
  padding: 50px 77px 60px;
  background: #fff;
  @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.login__btn-x {
  position: absolute;
  border: none;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  display: block;
  background: svg-load('remove.svg' fill=$text-color) center center / contain no-repeat;
  &:hover {
    background: svg-load('remove.svg' fill=lightgreen) center center / contain no-repeat;
  }
}
</style>