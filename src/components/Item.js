const Item = ({ item, handleComplete, handleEdit, handleDelete }) => {
  const { label, completed } = item;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleComplete(item)}
      />
      <label>{label}</label>
      <input type="text" />
      <button className="edit" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete" onClick={handleDelete(item)}>
        Delete
      </button>
    </li>
  );
};

export default Item;
