import PropTypes from "prop-types";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired,
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ItemList;
