import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const LoaderSpinner = ({ className }) => {
  const screenWidth = document.documentElement.clientWidth;
  const width = screenWidth > 767 ? 300 : 80;
  const height = screenWidth > 767 ? 200 : 80;
  return (
    <div className={`loader-books ${className}`}>
      <Loader type="Oval" color="#3d5575" height={height} width={width} />
    </div>
  );
};

LoaderSpinner.propTypes = {
  className: PropTypes.string,
};

LoaderSpinner.defaultProps = {
  className: '',
};

export default LoaderSpinner;
