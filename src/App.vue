<template>
  <div>
    <button @click="clickMe">click me</button>
  </div>
</template>

<script>
export default {
  setup() {
    const clickMe = () => {
      console.log('click me')
      if (DEBUG) {
        const a = 10
        const b = 20
        console.log(a + b)
      }
    }
    return {
      clickMe
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
