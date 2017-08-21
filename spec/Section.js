import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.css';

const Section = ({ children, id }) => (
  <section className={s.section} id={id}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string,
};

export default Section;
