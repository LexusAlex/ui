import React from 'react'
import PropTypes from 'prop-types'

function InputError({ error }) {
  return error ? (
    <div className="invalid-feedback" data-testid="violation">
      {error}
    </div>
  ) : null
}

InputError.propTypes = {
  error: PropTypes.string,
}

export default InputError
