import { useEffect, useState } from "react";
import Item from "./Item";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(function () {
    async function fetchItems() {
      try {
        setIsloading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("fail in fetch data");
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsloading(false);
      }
    }
    fetchItems();
  }, []);
  console.log(items);
  if (isLoading)
    return <div className="p-5 font-bold text-2xl">Loading...</div>;
  return (
    <div className="grid grid-cols-4 gap-0 p-6 w-full ">
      {items.map((item) => (
        <Item
          key={item.id}
          category={item.category}
          image={item.image}
          title={item.title}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default Items;
