import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'
import {Provider} from 'mobx-react'
import appStore from './appStore'
import seeds from './seeds.json'

const Start = () => (
  <Provider appStore={appStore}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(<Start />, document.body)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
