import { connect } from 'react-redux';
import { getTitle, getPrice } from '../../redux/filters/selectors';
import { ActionTypes, setFilter } from '../../redux/filters/actions';
import FilterForm from './FilterForm';

const mSTP = state => ({
  title: getTitle(state),
  price: getPrice(state),
});

const mDTP = dispatch => ({
  onChange: ({ target: { value, name } }) => {
    let type;
    switch (name) {
      case 'title':
        type = ActionTypes.SET_SEARCH_QUERY;
        break;
      case 'price':
        type = ActionTypes.SET_PRICE;
        break;
      default:
        return;
    }
    dispatch(setFilter(type, value));
  },
});

export default connect(mSTP, mDTP)(FilterForm);
