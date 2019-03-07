import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'uikit/dist/css/uikit.min.css'
import './style.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

ReactDOM.render(<App />, document.getElementById('root'))

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');