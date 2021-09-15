import React from 'react';
import '../assets/styles/category.css';
import PropTypes from 'prop-types';

const Category = ({ title, progress }) => (
  <div className="body">
    <i className="chess king icon" />
    <h3>{title}</h3>
    <p>
      %
      {progress}
    </p>
  </div>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Category;
