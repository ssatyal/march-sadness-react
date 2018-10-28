import React from 'react'
import PropTypes from 'prop-types'

class PreviewImage extends React.Component {

  static propTypes = {
    photo: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }

  render() {
    const { photo, index } = this.props
    return(
      <div className='col-sm-4 text-center'
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
      </div>
    )
  }
}

export default PreviewImage
