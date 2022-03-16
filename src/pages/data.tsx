import * as React from 'react'
import PageWrapper from '../components/PageWrapper'
import { PublicMapWrapped } from '@namcbugdb/react-public-map'

// THIS FIX IS NECESSARY FOR PRODUCTION AND WEBPACK!!!!
// https://docs.mapbox.com/mapbox-gl-js/api/#transpiling-v2
// https://github.com/mapbox/mapbox-gl-js/issues/10173
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

const NAMCMap: React.FC = () => {
    console.log('TEST env', {
        Something: 'something',
        GATSBY_MAPBOX_TOKEN: process.env.GATSBY_MAPBOX_TOKEN,
        GATSBY_PUBLICMAP_API: process.env.GATSBY_PUBLICMAP_API,
        GATSBY_VERSION: process.env.GATSBY_VERSION
    })
    return (
        <PageWrapper fullHeight>
            <div style={{ flex: 1, margin: '1rem' }}>
                <PublicMapWrapped
                    apiUrl={process.env.GATSBY_PUBLICMAP_API as string}
                    mapboxToken={process.env.GATSBY_MAPBOX_TOKEN as string}
                />
            </div>
        </PageWrapper>
    )
}

export default NAMCMap
