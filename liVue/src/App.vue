<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
}
@media only screen and (min-width: 320px) {
html,body {
  font-size:20px!important
  }
}

@media only screen and (min-width: 375px) {
html,body {
  font-size:20.75px !important
  }
}

@media only screen and (min-width: 414px) {
html,body  {
  font-size:20.7px !important
  }
}
</style>
