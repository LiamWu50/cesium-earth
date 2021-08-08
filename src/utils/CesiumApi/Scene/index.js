import Underground from './Underground'
import SurfaceRender from './SurfaceRender'

/**
 * 场景管理工具
 */
export default class Scene {
  constructor(viewer) {
    this._underground = new Underground(viewer)
    this._surfaceRender = new SurfaceRender(viewer)
  }

  get underground() {
    return this._underground
  }

  get surfaceRender() {
    return this._surfaceRender
  }
}
