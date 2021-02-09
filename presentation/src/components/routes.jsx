import { Route } from 'react-router-dom';

import HelloSSR from './hello-ssr';

export default function Routes() {
  return (
    <Route exact path='/'>
      <HelloSSR />
    </Route>
  )
}
