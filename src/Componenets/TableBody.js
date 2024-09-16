import toast from "react-hot-toast";
import { useCartStore } from "../store";

function TableBody({ data }) {
  // const removeFromCart = useCartStore((state) => state.removeFromCart);
  // const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  // const decreaseQuantity = useCartStore(stat);

  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore(
    (state) => ({
      removeFromCart: state.removeFromCart,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
    })
  );

  if (!data) return null;

  const { id, name, price, rating: rate, category, quantity } = data;

  function handleRemoveItem(id) {
    removeFromCart(id);
    toast.success("Item Removed");
  }
  function handleAddQuantity(id) {
    increaseQuantity(id);
    toast.success("Add one");
  }
  function handleRemoveQuantity(id) {
    if (quantity === 1) {
      removeFromCart(id);
      toast.success("Item Removed");
    }
    decreaseQuantity(id);
    toast.success("Remove one");
  }
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleRemoveItem(id)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Remove Item
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleAddQuantity(id)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          +1
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleRemoveQuantity(id)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          -1
        </button>
      </td>
    </tr>
  );
}

export default TableBody;
