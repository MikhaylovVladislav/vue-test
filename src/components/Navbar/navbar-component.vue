<template>
  <div class="menu">
    <div>
      <router-link to="/profile">Моя страница</router-link>
    </div>
    <div>
      <router-link to="/news">Новости</router-link>
    </div>
    <div>
      <router-link to="/messenger">Мессенджер</router-link>
    </div>
    <div>
      <router-link to="/friends">Друзья</router-link>
    </div>
    <div>
      <router-link to="/users">Пользователи</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'navbar-menu'
}
</script>
<style>
.menu{
  background-color: aqua;
  height: 200px;
  padding: 10px;
}
</style>
