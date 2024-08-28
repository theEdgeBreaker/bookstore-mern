import PropTypes from "prop-types";

const Cards = ({ item, isHome }) => {
  console.log({ item });
  return (
    <>
      <div className="mt-4 my-3  p-3">
        <div
          className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200
         dark:bg-slate-900 dark:text-white light:bg-red-200 light:text-black dark:border"
        >
          <figure>
            <img src={isHome ? item.image1 : item.image2} alt="books-img" />
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
    image1: PropTypes.string,
    image2: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  isHome: PropTypes.bool.isRequired,
};

export default Cards;

// import PropTypes from "prop-types";

// const Cards = ({ item, isHome }) => {
//   console.log({ item });
//   return (
//     <div className="mt-4 my-3 p-3">
//       <div className="card bg-base-100 w-92 h-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
//         <figure className="h-1/2 overflow-hidden">
//           <img
//             src={isHome ? item.image1 : item.image2}
//             alt="books-img"
//             className="w-full h-full object-cover"
//           />
//         </figure>
//         <div className="card-body h-1/2 flex flex-col justify-between">
//           <h2 className="card-title">
//             {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p>{item.title}</p>
//           <div className="card-actions justify-between items-center px-2 py-1">
//             <div className="badge badge-outline">${item.price}</div>
//             <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//               Buy Now
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Cards.propTypes = {
//   item: PropTypes.shape({
//     title: PropTypes.string,
//     image1: PropTypes.string,
//     image2: PropTypes.string,
//     name: PropTypes.string,
//     category: PropTypes.string,
//     price: PropTypes.number,
//   }).isRequired,
//   isHome: PropTypes.bool.isRequired,
// };

// export default Cards;
