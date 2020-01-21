import React from 'react';
import PropTypes from 'prop-types';

const CartTable = ({ books }) =>
  books.length > 0 && (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Count</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.count}</td>
            <td>${book.totalPrice.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

CartTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
    }),
  ),
};

CartTable.defaultProps = {
  books: [],
};

export default CartTable;
