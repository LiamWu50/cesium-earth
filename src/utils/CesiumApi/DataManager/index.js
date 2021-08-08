import * as Cesium from 'cesium/Cesium.js'
import FeatureLayerCollection from './FeatureLayer/FeatureLayerCollection'
import ImageryLayerCollection from './ImageryLayer/ImageryLayerCollection'
import Terrain from './Terrain/Terrain'
import FeatureLayer from './FeatureLayer/FeatureLayer'

export default class DataManager {
  constructor(viewer) {
    this._featureLayerCollection = new FeatureLayerCollection(viewer)
    this._imageryLayerCollection = new ImageryLayerCollection(viewer)
    this._terrain = new Terrain(viewer)

    const drawFeatureLayer = new FeatureLayer(null, '绘制图层'),
      measureFeatureLayer = new FeatureLayer(null, '测量图层')
    this._featureLayerCollection.add(drawFeatureLayer)
    this._featureLayerCollection.add(measureFeatureLayer)
  }

  get featureLayerCollection() {
    return this._featureLayerCollection
  }

  get imageryLayerCollection() {
    return this._imageryLayerCollection
  }

  get terrain() {
    return this._terrain
  }
}
