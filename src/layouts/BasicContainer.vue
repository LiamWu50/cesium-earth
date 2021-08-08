<template>
  <div class="basic-container">
    <CesiumMap ref="CesiumMap" />
  </div>
</template>

<script>
import CesiumMap from '@/components/CesiumMap'
export default {
  name: 'BasicContainer',

  components: { CesiumMap }
}
</script>

<style lang="less" scoped>
.basic-container {
  width: 100%;
  // width: calc(100% - 80px);
  height: 100%;
}
</style>
