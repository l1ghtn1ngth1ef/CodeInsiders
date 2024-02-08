import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './app'
import * as ReactDOM from 'react-dom/client'
(async function () {
    const root = document.getElementById('app')
    const page = window.hydrate.page
    const props = window.hydrate.props
    const Component = (await import(`./app.jsx`)).default

    ReactDOM.hydrateRoot(root, <Component {...props} />)
})()