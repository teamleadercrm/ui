import PropTypes from 'prop-types';

const InputMetaPropTypes = PropTypes.shape({
  active: PropTypes.bool,
  autofilled: PropTypes.bool,
  asyncValidating: PropTypes.bool,
  dirty: PropTypes.bool,
  dispatch: PropTypes.func,
  error: PropTypes.string,
  form: PropTypes.string,
  initial: PropTypes.any,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  submitFailed: PropTypes.bool,
  touched: PropTypes.bool,
  valid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  visited: PropTypes.bool,
  warning: PropTypes.string,
});

export default InputMetaPropTypes;
