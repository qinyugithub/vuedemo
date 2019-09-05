<template>
  <div id="app">
    <!-- <HelloWorld/>
    <Test/> -->
    <ul>
      <li><router-link to="/">HelloWorld</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    HelloWorld,Test
  }
}
</script>

<style>

</style>
