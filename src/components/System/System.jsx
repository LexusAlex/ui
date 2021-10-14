import React from 'react'
import PropTypes from 'prop-types'

function System({ children }) {
  return (
    <React.Fragment>
      <div>{children}</div>
    </React.Fragment>
  )
}

System.propTypes = {
  children: PropTypes.any,
}

export default System
