<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/products">Товары</router-link> |
      <router-link to="/about">О нас</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  background-color: #f8f8f8;
}
nav a {
  margin: 0 10px;
}
</style>
