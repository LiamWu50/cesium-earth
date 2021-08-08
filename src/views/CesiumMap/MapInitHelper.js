import CesiumApi from '@/utils/CesiumApi'
import * as Cesium from 'cesium/Cesium.js'
import MAP_RESOURCES from '@/config/map-resources'
export default new (class MapInitHelper {
  constructor() {}

  get initMap() {
    return this._initMap
  }

  /**
   * 初始化地球
   * @param {String || Element} target
   * @return {CesiumApi.MapViewer} mapViewer
   */
  _initMap(target) {
    const options = this._getInitOptions()
    let mapViewer = new CesiumApi.MapViewer(target, options)

    this._laodTestImagerLayer(mapViewer.viewer)

    // const posotion = new Cesium.Cartesian3.fromDegrees(...MAP_RESOURCES.initialView)
    // mapViewer.camera.flyTo(posotion)

    return mapViewer
  }

  _laodTestImagerLayer(viewer) {
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(114.13, 22.62, 10000),
      orientation: {
        heading: 0,
        pitch: -Math.PI / 2,
        roll: 0
      }
    })

    let mapurl2 =
      'https://amr.sz.gov.cn/szmqs/szdlkj/gw/OGC/Map/SZ_VEC_B4490/?LAYER=Blue_shenzhen&style=&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&TILEMATRIXSET=EPSG%3A4490&FORMAT=image%2Fpng&tilematriX={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&szvsud-license-key=ndLg0mxz3dbSZiGU5izQ4iGI2cdx/8YGya02K9UgrviZHIR/LZ72feWTJVJsOsYv'
    // let mapurl2 =
    //   'https://amr.sz.gov.cn/szmqs/szdlkj/gw/OGC/Map/SZ_VEC_B4490/?LAYER=Blue_shenzhen&style=&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&TILEMATRIXSET=EPSG%3A4490&FORMAT=image%2Fpng&TILEMATRIX=EPSG%3A4490%3A4&TileRow={TileRow}&TileCol={TileCol}&szvsud-license-key=ndLg0mxz3dbSZiGU5izQ4iGI2cdx/8YGya02K9UgrviZHIR/LZ72feWTJVJsOsYv'

    viewer.imageryLayers.addImageryProvider(
      new Cesium.WebMapTileServiceImageryProvider({
        url: mapurl2,
        layer: 'Blue_shenzhen',
        format: 'image/png',
        style: '',
        tileMatrixSetID: 'EPSG:4490',
        // tileMatrixLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        tileMatrixLabels: [
          'EPSG:4490:0',
          'EPSG:4490:1',
          'EPSG:4490:2',
          'EPSG:4490:3',
          'EPSG:4490:4',
          'EPSG:4490:5',
          'EPSG:4490:6',
          'EPSG:4490:7',
          'EPSG:4490:8',
          'EPSG:4490:9',
          'EPSG:4490:10'
        ],
        tilingScheme: new Cesium.GeographicTilingScheme()
      })
    )
  }

  /**
   * 获取地球初始化参数
   * @returns {Object}
   */
  _getInitOptions() {
    return {
      // imageryProvider: new Cesium.TileMapServiceImageryProvider({
      //   url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII'),
      // }),
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      shadows: true,
      infoBox: false,
      CreditsDisplay: false,
      shouldAnimate: true,
      selectionIndicator: false,
      orderIndependentTranslucency: false,
      contextOptions: {
        webgl: {
          alpha: true
        }
      }
    }
  }
})()
