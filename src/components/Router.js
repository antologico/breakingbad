/* istanbul ignore file */
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Index from './Index'
import Detail from './Detail'

const Router = () => <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Index />} />
      <Route path='detail'>
          <Route path=':id' element={<Detail />} />
      </Route>
      <Route
        path="*"
        element={<p>There's nothing to see here!</p>}
      />
    </Routes>
</BrowserRouter>

export default Router