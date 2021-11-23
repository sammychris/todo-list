import Item from "./Item";

const ListItems = ({ tasks, ...args }) => {
  return tasks.map((item) => <Item item={item} {...args} />);
};

export default ListItems;
