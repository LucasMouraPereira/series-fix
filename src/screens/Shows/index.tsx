import { Suspense } from 'react'
import ShowsContainer from './containers'

const ShowsScreens = () => (
  <Suspense>
    <ShowsContainer />
  </Suspense>
)

export default ShowsScreens
