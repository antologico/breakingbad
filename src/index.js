/* istanbul ignore file */
import '@babel/polyfill'
import React from 'react'
import App from './App'
import initStore from './store'
import { render } from 'react-dom';
const store = initStore()
import { Provider } from 'react-redux'
import LanguageProvider from './components/LanguageProvider';
import Container from './components/Container';

render(
    <Provider store={store}>
        <LanguageProvider>
            <Container>
                <App />
            </Container>
        </LanguageProvider>
    </Provider>,
    document.getElementById('app'),
)

module.hot && module.hot.accept(App)
