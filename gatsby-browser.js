// gatsby-browser.js
import React from 'react'
import log from 'loglevel'
// https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling
import mapboxgl from '!mapbox-gl'
// THIS FIX IS NECESSARY FOR PRODUCTION AND WEBPACK!!!!
// https://docs.mapbox.com/mapbox-gl-js/api/#transpiling-v2
// https://github.com/mapbox/mapbox-gl-js/issues/10173
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const mapboxgl = require('mapbox-gl/dist/mapbox-gl')

// eslint-disable-next-line @typescript-eslint/no-var-requires
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default
const { NODE_ENV } = process.env
if (NODE_ENV === 'development') log.enableAll()

export const wrapRootElement = ({ element }) => {
    return element
}
