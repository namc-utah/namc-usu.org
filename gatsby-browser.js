// gatsby-browser.js
import React from 'react'
import log from 'loglevel'

const { NODE_ENV } = process.env
if (NODE_ENV === 'development') log.enableAll()

export const wrapRootElement = ({ element }) => {
    return element
}
