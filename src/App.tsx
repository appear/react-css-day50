import ResetCSS from './components/shared/ResetCSS'
import IndexPage from './pages'
import Day01 from './pages/day01'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/day01" component={Day01} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
