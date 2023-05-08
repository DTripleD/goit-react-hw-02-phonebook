import { FilterForm, Input } from './Filter.styled';
import PropTypes from "prop-types";

const Filter = ({ changeFilter, value }) => (
  <FilterForm>
    Find contacts by name
    <Input
      type="text"
      onChange={changeFilter}
      value={value}
      placeholder="Who are we looking for?"
    />
  </FilterForm>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
}
