import PropTypes from "prop-types";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item, id) => (
        <LineItem
          key={id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
  handleCheck: PropTypes.any,
  handleDelete: PropTypes.any,
};

export default ItemList;
