<template>
  <div id="app">
		<main-tab-bar class="main-tab-bar"></main-tab-bar>
		<router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
.main-tab-bar {
	z-index: 10;
}
@import "assets/css/base.css"
</style>
