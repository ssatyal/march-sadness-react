import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LooksLike from './LooksLike'

class PreviewImage extends React.Component {

  static propTypes = {
    photo: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    looksLike: PropTypes.string.isRequired,
  }

  render() {
    const { photo, index, looksLike } = this.props
    let props = this.props
    return(
      <div className='col-sm-4 text-center'
        onClick={() => <Route path='/lookslike' render={(props) => <LooksLike {...props}/>} />
        }
        style={{
          width: '250px',
          height: '250px',
          backgroundImage: `url(${photo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50%', 
          borderStyle: 'solid'}}
        key={index}
      >
      {/* <Link to='lookslike' /> */}
      
      </div>
    )
  }
}

export default PreviewImage
