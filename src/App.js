import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import seeds from './seeds.json'
import {inject, observer} from 'mobx-react'
import {toJS} from 'mobx'

const App = inject('appStore')(
  observer(({appStore}) => (
  <Router>
    <div>
    {console.log('appStore', toJS(appStore))}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/previewArea">Preview</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/previewArea" component={previewArea}/>
    </div>
  </Router>
)))

const Home = () => (
  <div>
    <h2>Home</h2>
    {previewArea(seeds['2017'])}
  </div>
);

const previewArea = (items) => {
  // const items = seeds['2017']
  console.log('items', items)
  return (
    <div className='row'>
      {items.map(item => {
        return (
          // <div className='col-sm-4 text-center' style={{borderStyle: 'solid'}}>
          <div className='col-sm-4 text-center' style={{
            width: '250px',
            height: '250px',
            backgroundImage: `url(${item.photo_url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%', 
            borderStyle: 'solid'}}>
            {/* <img src={item.photo_url} style={{width:'100%', height: 'auto', verticalAlign: 'middle'}}/> */}
          </div>
          // </div>
        )
      })}
    </div>
  )
  // items.forEach(item => {
  //   console.log('we got an item', item)
  //   console.log('item.name', item.name)
  //   return (
      
  //   )
  // })
  // return null
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
