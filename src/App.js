import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import seeds from './seeds.json'
import {inject, observer} from 'mobx-react'
import {toJS} from 'mobx'
import PreviewImage from './PreviewImage'
import LooksLike from './LooksLike'

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
          <Link to="/looksLikes">Preview</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/looksLikes" render={() => looksLikes({items: seeds['2017'], match})}/>
    </div>
  </Router>
)))

const Home = () => (
  <div>
    <h2>Home</h2>
    {/* {looksLikes({items: seeds['2017']})} */}
  </div>
);

const looksLikes = ({ items, match }) => {
  // const items = seeds['2017']
  console.log('items', items)
  console.log('match', match)
  return (
    <div className='row'>
      {items.map(( {item, index, match}) => {
        return (
          <div>
          <Link to={`${match.url}/:lookslikeId`}>
          <PreviewImage
            photo={item.photo_url}
            index={index}
            looksLike={item.looks_like}
          />
          </Link>
          <Route path={`${match.path}/:looksLikeId`} render={() => <LooksLike />} />
          </div>
        )
      })
      }
    </div>
  )
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const banana = 'boo'

const Topics = ({ match, banana }) => (
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

const Topic = ({ match, banana }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
