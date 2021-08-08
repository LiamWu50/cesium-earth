import * as Cesium from 'cesium/Cesium.js'

function getCameraDistance(viewer) {
  let canvas = viewer.scene.canvas
  let center = new Cesium.Cartesian2(Math.round(canvas.width / 2.0), Math.round(canvas.height / 2.0))
  let ray = viewer.camera.getPickRay(center)
  let cartesian3 = viewer.scene.globe.pick(ray, viewer.scene)
  let distance = cartesian3 ? Cesium.Cartesian3.distance(viewer.camera.position, cartesian3) : 0
  return distance
}

export default class Camera {
  constructor(viewer) {
    this._viewer = viewer
  }

  get flyTo() {
    return this._flyTo
  }

  /**
   * 飞行到指定位置
   * @param {Cesium.Cartesian3} position
   */
  _flyTo(position) {
    this._viewer.camera.flyTo({
      destination: position
    })
  }

  /**
   * 飞行到地球对象
   * @param {Object} Obj
   */
  flyToObj(Obj) {}

  /**
   * 相机高度
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */

  get magnitude() {
    return this._viewer.camera.getMagnitude()
  }

  /**
   * 相机点
   * @type {Position3}
   * @memberof Camera.prototype
   * @readonly
   */
  // get position() {
  //   let y = this._viewer.camera.position
  //   return Position3Converter.fromCartesian3(y)
  // }

  /**
   * 方向角,水平面360度范围
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */

  get heading() {
    let h = Cesium.Math.toDegrees(this._viewer.camera.heading)
    return h
  }

  /**
   * 俯仰角,上下-90到90度范围
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */
  get pitch() {
    let p = Cesium.Math.toDegrees(this._viewer.camera.pitch)
    return p
  }

  /**
   * 横滚角,侧向360度范围
   * @type {Number}
   * @memberof Camera.prototype
   * @readonly
   */
  get roll() {
    return Cesium.Math.toDegrees(this._viewer.camera.roll)
  }

  /**
   * 视距，单位米
   * @type {Number}
   * @memberof Camera.prototype
   */
  get distance() {
    this._distance = getCameraDistance(this._viewer)
    return this._distance
  }
}
