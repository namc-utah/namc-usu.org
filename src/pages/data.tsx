import * as React from 'react'
import PageFullWidth from '../components/PageFullWidth'
import { PublicMapWrapped } from '@namcbugdb/react-public-map'
import { RecoilRoot } from 'recoil'
import { SnackbarProvider } from 'notistack'

// THIS FIX IS NECESSARY FOR PRODUCTION AND WEBPACK!!!!
// https://docs.mapbox.com/mapbox-gl-js/api/#transpiling-v2
// https://github.com/mapbox/mapbox-gl-js/issues/10173
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

// markup
const NAMCMap: React.FC = () => {
    return (
        <PageFullWidth title="NAMC Map">
            <RecoilRoot>
                <SnackbarProvider>
                    <PublicMapWrapped
                        apiUrl={process.env.GATSBY_PUBLICMAP_API as string}
                        mapboxToken={process.env.GATSBY_MAPBOX_TOKEN as string}
                    />
                </SnackbarProvider>
            </RecoilRoot>
        </PageFullWidth>
    )
}

export default NAMCMap
