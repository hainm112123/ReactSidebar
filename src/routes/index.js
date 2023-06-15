import { Route } from 'react-router-dom'

import appRoutes from './appRoutes'
import PageWrapper from '../components/layout/PageWrapper'

const generateRoute = (routes) => {
  return routes.map((route, index) => {
    // console.log(route);
    return (
      route.index ? (
        <Route
          index
          exact
          path={route.path}
          element={
            <PageWrapper state={route.state}>
              {route.element}
            </PageWrapper>
          }
          key={index}
        >   
        </Route>
      ) : (
        <Route
          exact
          path={route.path}
          element={
            <PageWrapper state={route.state ?? undefined}>
              {route.element}
            </PageWrapper>
          }
          key={index}
        >
          {route.child && (generateRoute(route.child))}
        </Route>
      )
    )
  })
} 

const routes = generateRoute(appRoutes);
export default routes;
