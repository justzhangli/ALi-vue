<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{countVuex}}
    <ul>
      <li v-for="c in carsVuex">{{c.name}}</li>
      <button v-on:click="handleAdd">++</button>
      <input type="text" v-bind:value="msg2" v-on:input="handleInput">
      <p>使用严格模式的时候，v-mode无法起作用，在修改数据时，只能通过触发mutation来修改仓库中的数据</p>
    </ul>
  </div>
</template>

<script>
import {mapState,mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    handleAdd(){
      //通过commit来触发仓库中的mutation,commit中可以传递第二参数，用于每次增加的间隔数
      this.$store.commit("increment",2)
    },
    handleInput(event){
      this.$store.commit("handleChange",event.target.value)
    }
  },
  created:function(){
    this.$store.dispatch('addName')
  },
  computed:{
    /*countVuex(){
      return this.$store.state.count
    }*/
    //获取仓库中的数据
    ...mapState({
      countVuex:state=>state.count
    }),
    //获取仓库中被加工了的数据
    ...mapGetters({
      carsVuex:'fourFillter'
    })
   /* carsVuex(){
      return this.$store.getters.fourFillter
    }*/

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
