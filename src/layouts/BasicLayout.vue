<template>
  <div class="basic-layout">
    <BasicContainer />
  </div>
</template>

<script>
import BasicSideBar from './BasicSideBar'
import BasicContainer from './BasicContainer'

export default {
  name: 'BasicLayout',

  components: { BasicContainer }
}
</script>

<style lang="less" scoped>
.basic-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
