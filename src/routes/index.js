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
            <PageWrapper state={route.childs ? undefined : route.state}>
              {route.element}
            </PageWrapper>
          }
          key={index}
        >
          {route.childs && (generateRoute(route.childs))}
        </Route>
      )
    )
  })
} 

const routes = generateRoute(appRoutes);
export default routes;
