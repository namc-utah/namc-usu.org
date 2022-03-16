import * as React from 'react'
import PageWrapper from '../components/PageWrapper'
import { PublicMapWrapped } from '@namcbugdb/react-public-map'
import 'mapbox-gl/dist/mapbox-gl.css'

const NAMCMap: React.FC = () => {
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
