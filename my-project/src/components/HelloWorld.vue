<template>
  <div class="hello">
    <div>
      <router-link tag="div"  to="{name:'a',param:{a:'xxx'}}">
          <a>链接A页面</a>
      </router-link>
      <router-link tab="div" to="/B">
        <a>
          链接B页面
        </a>
      </router-link>
      <div>
        <a @click="hreftoA">链接组件A</a>
        <a @click="hreftoB">链接组件B</a>
      </div>
      <div>
        <div v-if="a">
          <com-a></com-a>
        </div>
        <div v-if="b">
          <com-b></com-b>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import comA from '@/components/componentsA'
import comB from '@/components/componentsB'
export default {
  name: 'HelloWorld',
  data () {
    return {
      a: true, // 控制组件A显示
      b: false, // 控制组件B显示
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    hreftoA: function () {
      // this.$router.push({
      //   name: "a",
      //   param: {
      //     mnpltTp: '1',//操作类型    新增
      //     dtsrcInd:'0',//数据来源标志  测算
      //     ofrScmId: null//报价方案编号
      //   }
      // });
      this.a = true
      this.b = false
    },
    hreftoB () {
      this.a = false
      this.b = true
    }
  },
  components: {
    comA,
    comB
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
