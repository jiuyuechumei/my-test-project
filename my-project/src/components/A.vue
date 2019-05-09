<template>
    <div>
      {{a}}
    </div>
</template>

<script>
export default {
  methods: {

  },
  data: function () {
    return {
      a: '我是A页面'
    }
  },
  watch: {

  },
  mounted () {
    debugger
    console.log(this.$router.params)
  },
  props: {

  }
}
</script>

<style scoped>

</style>
