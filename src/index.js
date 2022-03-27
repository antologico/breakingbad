import '@babel/polyfill'
import React from 'react'
import App from './App'
import initStore from './store'
import { render } from 'react-dom';
const store = initStore()
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
)

module.hot && module.hot.accept(App)
