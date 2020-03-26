import React, { useEffect, useState } from 'react'
import '../../../components/mapview.add.scss'
import mapboxgl from 'mapbox-gl'
import { useStaticQuery, graphql } from 'gatsby';
import 'mapbox-gl/dist/mapbox-gl.css'

const mapStyle = require('../../../data/map-styles.js');

function AnimatedMap(props) {
  const [mapObject, setMapObject] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mapData {
            bounds
            center
          }
        },
      }
    }
  `);

  const setInteractivity = enabled => {
    if (!mapObject) return

    if (enabled) {
      mapObject.scrollZoom.enable()
      mapObject.boxZoom.enable()
      mapObject.dragRotate.enable()
      mapObject.dragPan.enable()
      mapObject.keyboard.enable()
      mapObject.doubleClickZoom.enable()
      mapObject.touchZoomRotate.enable()
      document.querySelector('.mapboxgl-control-container').style.display =
        'initial'
    } else {
      mapObject.scrollZoom.disable()
      mapObject.boxZoom.disable()
      mapObject.dragRotate.disable()
      mapObject.dragPan.disable()
      mapObject.keyboard.disable()
      mapObject.doubleClickZoom.disable()
      mapObject.touchZoomRotate.disable()
      document.querySelector('.mapboxgl-control-container').style.display =
        'none'
    }
  }

  if ('enabled' in props) setInteractivity(props.enabled)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      // width: '100%',
      // height: '100%',
      style: mapStyle,
      zoom: 8,
      interactive: true,
      center: data.site.siteMetadata.mapData.center,
    })

    // Return map object
    props.getMapObject(map)

    // Add controls
    const navigationControl = new mapboxgl.NavigationControl({
      showCompass: false
    })

    map.addControl(navigationControl, 'top-right')
    setInteractivity(false)

    setMapObject(map)

    // Initial adjustments
    map.once('load', () => {
      // Add UserPoint
      map.addSource('position', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      })

      map.addLayer({
        id: 'position',
        type: 'circle',
        source: 'position',
        paint: {
          'circle-radius': 6,
          'circle-color': '#27ae60',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff'
        }
      })

      // On Load Callback
      if (props.onLoad) {
        props.onLoad()
      }
    })
  }, [])

  return (
    <>
      <div id='map'>{props.children}</div>
    </>
  )
}

export default AnimatedMap
