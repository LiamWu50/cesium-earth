/**
 * 地下模式管理工具
 */
export default class Underground {
  constructor(viewer) {
    this._scene = viewer.scene
  }

  get open() {
    return this._open
  }

  get close() {
    return this._close
  }

  /**
   * 开启地下模式
   */
  _open() {
    this._scene.screenSpaceCameraController.enableCollisionDetection = false
  }

  /**
   * 关闭地下模式
   */
  _close() {
    this._scene.screenSpaceCameraController.enableCollisionDetection = true
  }
}
