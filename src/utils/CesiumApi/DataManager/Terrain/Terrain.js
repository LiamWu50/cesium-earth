import * as Cesium from 'cesium/Cesium.js'
import terrainType from './TerrainProviderType'
function EllipsoidTerrainProvider() {
  return new Cesium.EllipsoidTerrainProvider()
}

function CesiumTerrainProvider(url, options) {
  return new Cesium.CesiumTerrainProvider({
    url,
    requestVertexNormals: options.requestVertexNormals
  })
}

function CreateWorldTerrain(url, options) {
  new Cesium.createWorldTerrain({ requestVertexNormals: options.requestVertexNormals })
}

const TerrainProviderType = {
  EllipsoidTerrain: EllipsoidTerrainProvider,
  CesiumTerrain: CesiumTerrainProvider,
  WorldTerrain: CreateWorldTerrain
}

export default class Terrain {
  constructor(viewer) {
    this._viewer = viewer
    this._terrainProvider = undefined
  }

  get load() {
    return this._load
  }

  get show() {
    return this._show
  }

  /**
   * 加载地形数据
   * @param {String} url
   * @param {Number} type
   * @param {Object} options
   */
  _load(url, type, options = {}) {
    if (!url) throw new Error('缺少地形服务地址！')

    type = Cesium.defaultValue(type, terrainType.ELLIPSOID_TERRAIN)
    this._requestVertexNormals = Cesium.defaultValue(options.requestVertexNormals, false)

    const typeHandler = TerrainProviderType[type]
    this._terrainProvider = typeHandler(url, options)
    this._viewer.terrainProvider = this._terrainProvider
  }

  /**
   *  切换地形隐藏与显示
   * @param {Boolean} value
   */
  _show(value) {
    if (value !== this._visible) {
      const emptyTerrain = new Cesium.EllipsoidTerrainProvider()
      this._viewer.terrainProvider = value ? this._terrainProvider : emptyTerrain
      this._visible = value
    }
  }
}
