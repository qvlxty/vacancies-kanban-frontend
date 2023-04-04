import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage, UsersPage } from '@/pages/login'

import { Layout } from './features/app/view/entries'
import { RouterGuard } from './routes/RouterGuard'
import { KanbanPage, SlotsPage } from './pages/kanban'

const routes = [
  {
    path: '/',
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: '/kanban',
    component: KanbanPage,
    isPrivate: true,
  },
  {
    path: '/users',
    component: UsersPage,
    isPrivate: true,
  },
  {
    path: '/slots',
    component: SlotsPage,
    isPrivate: true,
  },
]

export const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        {routes.map((route) => {
          const Component = route.component
          return (
            <Route key={route.path} path={route.path} exact>
              <RouterGuard isPrivate={route.isPrivate} >
                <Component />
              </RouterGuard>
            </Route>
          )
        })}
      </Switch>
    </Layout>
  </Router>
)
