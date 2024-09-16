import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartStore } from "../store";
import toast from "react-hot-toast";

function ItemDetail() {
  const { id } = useParams();
  console.log(id);
  const [item, setItem] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(
    function () {
      async function fetchItem() {
        try {
          setIsloading(true);
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!res.ok) {
            throw new Error("Failed in fetching the data");
          }
          const data = res.json();
          data.then(function (result) {
            setItem(result);
          });
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsloading(false);
        }
      }
      fetchItem();
    },
    [id]
  );
  const newItem = {
    id: item.id,
    name: item.title,
    price: item.price,
    rating: item.rating?.rate,
    category: item.category,
  };

  const addToCart = useCartStore((state) => state.addToCart);

  function handleAddItem(newItem) {
    addToCart(newItem);
    toast.success("Item Added");
  }
  if (isLoading)
    return <div className="p-5 font-bold text-2xl">Loading...</div>;
  return (
    <div className="flex flex-row gap-12 m-8 p-7   border-solid border-2 border-gray-200 rounded relative">
      <img
        className=" w-full md:rounded-lg  md:h-3/6 md:w-2/6 "
        src={item.image}
        alt="item one"
      />{" "}
      {/* <span className="font-bold text-lg uppercase absolute right-[595px] top-2/4 z-20">
        and
      </span> */}
      {/* <span className="border-solid border-l-2 border-gray-200 absolute w-full h-full left-[665px] top-0"></span> */}
      <div className="flex flex-col p-4 justify-start mt-10 ">
        <h1 className="text-4xl mb-10">{item.title}</h1>
        <span className="p-3 rounded-lg bg-blue-500 text-white text-xl w-24 text-center">
          ${item.price}
        </span>
        <div className="mt-6 mb-6 border-solid border font-bold p-3 rounded-lg  text-yellow-600 border-yellow-600">
          {item.category}
        </div>
        <p className="text-gray-400 text-lg mb-6">{item.description}</p>
        <button
          onClick={() => handleAddItem(newItem)}
          type="button"
          className="text-white w-44 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
