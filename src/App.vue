<template>
  <div :class="$style.wrapper">
    <div :class="$style.headerComponent">
      <header-component msg="Header"/>
    </div>
    <div :class="$style.navbarComponent">
      <navbar-component/>
    </div>
    <div :class="$style.contentComponent">
      <content-component/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/Header/header-component.vue'
import NavbarComponent from './components/Navbar/navbar-component.vue'
import ContentComponent from './components/ContentArea/content-component.vue'

export default {
  name: 'App',
  components: {
    ContentComponent,
    NavbarComponent,
    HeaderComponent

  }
}
</script>

<style module>

</style>
