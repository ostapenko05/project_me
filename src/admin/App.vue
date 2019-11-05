<template lang="pug">
  div.root-wrapper-container
    div.root-container
        header.header-container
          .header
            .container
              .header__info
                .user
                  .user__pic
                  .user__name 
                    span Аркадий Остапенко
                    a.exit-btn Выйти
                    
                .header__title Панель администрирования
              a.exit-btn Выйти
        section.tabs-container
          .tabs-container
            .container
              ul.tabs
                li.tabs__item(v-for="tab in tabs")
                  .tabs__link
          .about-page-container
            .container
              .about-page__title
                h1.page-title Обо мне
                button.about-page__add-new Добавить группу
            .about-page__content
              .container.container--mobile-wide
                ul.skill-list
                  li.skill-list__item
                  li.skill-list__item
                    skills-group
          .works-section
            .container
              h1.page-title Блок "Мои работы"
        main.content-container
          button.default-btn-container.btn-decorator
            .btn-file-container
            .btn-file-fake.btn-decorator
          input.btn-file-input


          //- label.input
          //-   .input__title
          //-     input.input__elem.field__elem
          //-       .input__error-tooltip
          //- label.textarea
          //-   .input__title
          //-     textarea.textarea__elem.field__elem
          //-       .input__error-tooltip
            

        div.login
          .login__content
            form.login__form
              .login__form-title Авторизация
              .login__row
                input(
                  title="Логин"
                  icon="user"
                )
              .login__row
                input(
                  title="Пароль"
                  icon="key"
                  type="password"
                )
              .login__btn
                button(
                  type="submit"
                ).login__send-data Отправить
        div.input__error-tooltip-container
        

  //- div.root-wrapper-container
  //-   div.root-container
  //-     template
  //-       header.header-container
  //-         app-header
  //-       section.tabs-container
  //-         tabs
  //-       main.content-container
  //-         router-view
</template>

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
  background: url("~images/content/up-tablets.png") center center no-repeat / cover;
  /* opacity: .3; */
  flex: 1;
  padding-top: 60px;
  @include phones {
    padding-top: 30px;
  }
}
.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}

/// header

.header {
  color: #fff;
}
.header__info {
  display: flex;
  align-items: center;
}
.header__title {
  color: rgba(#fff, 0.5);
  @include phones {
    display: none;
  }
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.user__name {
  font-size: 18px;
  font-weight: 600;
  .exit-btn {
    display: none;
    @include phones {
      display: block;
    }
  }
}
.user__pic {
  background: url("~images/content/arkadiy.png") center center no-repeat / cover;
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}
.exit-btn {
  opacity: 0.7;
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    text-decoration: none;
  }
  @include phones {
    display: none;
  }
}

/// about

.skill-container {
  border: 1px solid black;
  padding: 10px;
}
.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
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

/// login

.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: center;
  /* background: url("~images/content/arkadiy.png") center center / cover no-repeat; */
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
}
.login__content {
  position: relative;
  @include phones {
    height: 100%;
    width: 100%;
  }
}
.login__row {
  margin-bottom: 35px;
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
  border-radius: 40px 0 40px;
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

/// buttons

.btn-file-container {
  overflow: hidden;
  position: relative;
}
.btn-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}
.btn-decorator {
  padding: 19px 40px;
  color: #fff;
  text-transform: uppercase;
  background: linear-gradient(to right, #006aed, #3f35cb) center center;
  display: inline-block;
  border-radius: 100px;
  font-weight: bold;
  &.disabled {
    opacity: .5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
  }
  &.plain {
    text-transform: initial;
    color: $links-color;
    background: transparent;
  }
}

/// input-error

 .input__error-tooltip-container {
  z-index: 100;
  background: blueviolet;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: red;
    border-bottom-width: 7px;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}

/// tabs

.tabs-container {
  background: #fff;
}
.tabs {
  display: flex;
  height: 77px;
  @include phones {
    height: 87px;
  }
}
.tabs__item {
  height: 100%;
  margin-right: 30px;
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