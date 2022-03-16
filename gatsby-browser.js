// gatsby-browser.js
import React from 'react'
import log from 'loglevel'
// https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling
import mapboxgl from '!mapbox-gl'

const { NODE_ENV } = process.env
if (NODE_ENV === 'development') log.enableAll()

export const wrapRootElement = ({ element }) => {
    return element
}
