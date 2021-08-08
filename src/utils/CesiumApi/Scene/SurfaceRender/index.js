import * as Cesium from 'cesium/Cesium.js'
/**
 * 地表渲染
 */
export default class SurfaceRender {
  constructor(viewer) {
    this._viewer = viewer
    this._scene = viewer.scene
  }

  get open() {
    return this._open
  }

  get close() {
    return this._close
  }

  /**
   * 开启地表渲染
   */
  _open() {
    const globe = this._scene.globe
    globe.depthTestAgainstTerrain = false
    globe.translucency.frontFaceAlphaByDistance = new Cesium.NearFarScalar(200.0, 0.0, 800.0, 1.0)
    globe.translucency.enabled = true
  }

  /**
   * 关闭地表渲染
   */
  _close() {
    const globe = this._scene.globe
    globe.depthTestAgainstTerrain = true
    globe.translucency.enabled = false
  }
}
