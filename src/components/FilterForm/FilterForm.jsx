import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({ title, price, onChange }) => (
  <form className="form-inline filter-form">
    <input
      className="form-control col-xs-6 col-md-3"
      value={title}
      name="title"
      type="text"
      onChange={onChange}
      placeholder="Search books by title"
    />
    <select
      className="form-control col-xs-6 col-md-3"
      value={price}
      name="price"
      onChange={onChange}
    >
      <option value="Price">Price</option>
      <option value="0">0-15$</option>
      <option value="15">15-30$</option>
      <option value="30">30$+</option>
    </select>
  </form>
);

FilterForm.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterForm;
