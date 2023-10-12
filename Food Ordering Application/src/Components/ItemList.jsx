import { CND_URL } from "../utils/constrains";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="mt-2">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between mx-2 mb-10 border-t-4 border-gray-300"
        >
          <div className="w-[400px]">
            <div className="mt-6 font-semibold">{item.card.info.name}</div>
            <div>
              ₹ -
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <p className="mt-4 text-xs">{item.card.info.description}</p>
          </div>
          <div className="flex">
          <img className="w-32 rounded-md h-28" src={CND_URL + item.card.info.imageId} alt="dishImg"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
