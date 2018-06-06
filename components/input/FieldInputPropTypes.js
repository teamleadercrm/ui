import PropTypes from 'prop-types';

const FieldInputPropTypes = PropTypes.shape({
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.any,
});

export default FieldInputPropTypes;
