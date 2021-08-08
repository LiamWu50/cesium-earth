<template>
  <div class="cesium-map" ref="mapContainer">
    <template v-if="mapLoaded">
      <slot />
    </template>
  </div>
</template>

<script>
import { onMounted, provide, ref } from 'vue'
import MapInitHelper from './MapInitHelper'

export default {
  name: 'CesiumMap',

  setup() {
    const mapLoaded = ref(false)
    const mapContainer = ref(null)

    onMounted(() => {
      initCesiumMap()
    })

    const initCesiumMap = () => {
      const mapViewer = MapInitHelper.initMap(mapContainer.value)

      mapLoaded.value = true
      provide('mapViewer', mapViewer)
    }

    return {
      mapLoaded,
      mapContainer
    }
  }
}
</script>

<style lang="less" scoped>
.cesium-map {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('../../assets/img/cesium/bg-image__.webp');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
