import React from 'react';
import App from './app'
import * as ReactDOM from 'react-dom/client'
(async function () {
    const root = document.getElementById('app')
    const page = window.hydrate.page
    const props = window.hydrate.props
    const Component = (await import(`./app.jsx`)).default

    ReactDOM.hydrateRoot(app, <Component {...props} />)
})()