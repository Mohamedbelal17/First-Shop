import { Link } from "react-router-dom";
import Header from "../Componenets/Header";
import TableBody from "../Componenets/TableBody";
import { useCartStore } from "../store";
import toast from "react-hot-toast";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (cart.length === 0)
    return (
      <div className="flex justify-center">
        <Link to="/">The Cart is Empty</Link>
      </div>
    );

  function handleClear() {
    clearCart();
    toast.success("Cart Cleared");
  }

  return (
    <div className="space-y-10">
      <Header />
      <div className="flex flex-col gap-2 justify-center ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <TableBody data={item} key={item.id} />
              ))}
            </tbody>
          </table>
        </div>

        <button onClick={() => handleClear()}>Clear Cart</button>
      </div>
    </div>
  );
}

export default CartPage;
