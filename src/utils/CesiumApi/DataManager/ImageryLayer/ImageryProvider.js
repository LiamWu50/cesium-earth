import * as Cesium from 'cesium/Cesium.js'

function ArcGisMapServerImageryProvider(url) {
  return new Cesium.ArcGisMapServerImageryProvider({
    url,
    enablePickFeatures: false
  })
}

function BingMapsImageryProvider(url, options) {
  return new Cesium.BingMapsImageryProvider({
    url,
    key: options.key,
    mapStyle: Cesium.BingMapsStyle.AERIAL
  })
}

function TileMapServiceImageryProvider(url) {
  return new Cesium.TileMapServiceImageryProvider({
    url
  })
}

function MapboxImageryProvider(url, options) {
  url = Cesium.defaultValue(url, 'https://api.mapbox.com/v4/')
  options.mapId = Cesium.defaultValue(options.mapId, 'mapbox.streets')
  return new Cesium.MapboxImageryProvider({
    url,
    mapId: options.mapId
  })
}

function SingleTileImageryProvider(url, options) {
  options.rectangle = Cesium.defaultValue(options.rectangle, Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0))
  return new Cesium.SingleTileImageryProvider({
    url,
    rectangle: options.rectangle
  })
}

function UrlTemplateImageryProvider(url) {
  return new Cesium.UrlTemplateImageryProvider({
    url
  })
}

/**
 * wms服务
 * @param {String} url
 * @param {Object} options
 * @param {Object} options[parameters] 
 * parameters: {
      transparent: true, // 是否透明
      format: 'image/png', // 返回格式
      srs: 'EPSG:4326', // 坐标系
      styles: ''
 * }
 * @returns {WebMapServiceImageryProvider}
 */
function WebMapServiceImageryProvider(url, options) {
  return new Cesium.WebMapServiceImageryProvider({
    url,
    layers: options.laers,
    parameters: options.parameters
  })
}

/**
 * wmts服务按照参数进行加载
 * @param {String} url
 * @param {Object} options
 * @returns {WebMapTileServiceImageryProvider}
 */
function WebMapTileServiceImageryProvider(url, options) {
  return new Cesium.WebMapTileServiceImageryProvider({
    url,
    layer: options.layer,
    style: options.style,
    tileMatrixSetID: options.tileMatrixSetID,
    format: options.format,
    maximumLevel: options.maximumLevel
  })
}

export default {
  ArcGisMapServerImageryProvider,
  BingMapsImageryProvider,
  TileMapServiceImageryProvider,
  MapboxImageryProvider,
  SingleTileImageryProvider,
  UrlTemplateImageryProvider,
  WebMapServiceImageryProvider,
  WebMapTileServiceImageryProvider
}
