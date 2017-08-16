import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.css';

const Content = ({ children }) => (
  <div className={s.content}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Content;
