import PropTypes from "prop-types";

const Cards = ({ item }) => {
  console.log({ item });
  return (
    <>
      <div className="mt-4 my-3  p-3">
        <div className="card bg-base-100 w-92 shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between  items-center px-2 py-1">
              <div className="badge badge-outline">${item.price}</div>
              <div
                className="cursor pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500
               hover:text-white duration-200"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Cards;
