import { Link } from "react-router-dom";

function Item({ title, category, image, price, id }) {
  return (
    <Link to={`/Product/${id}`}>
      <div className=" max-w-[250px] hover:-translate-y-2 transition-all bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 mb-4 dark:border-gray-700 ">
        <img className="rounded-t-lg h-40 " src={image} alt={`item ${id}`} />

        <div className="p-2">
          <h6 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h6>
          <span className="mb-1 font-bold text-gray-900 ">${price}</span>
          <p className=" font-normal text-gray-400 dark:text-gray-400">
            {category}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Item;
