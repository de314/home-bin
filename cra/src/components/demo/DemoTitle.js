import React from 'react'
import PropTypes from 'prop-types'

const DemoTitle = ({ title }) => (
  <div
    className="DemoTitle"
    style={{ backgroundColor: 'white', padding: '30px' }}
  >
    <h1>{title}</h1>
  </div>
)

DemoTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default DemoTitle
