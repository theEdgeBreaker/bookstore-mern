import list from "../data/bookList.json";
import Cards from "./Cards";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We&#39;re delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Nullam ac urna eu felis dapibus condimentum. Praesent eu
            risus vitae lacus aliquam pulvinar. Proin at dolor nec eros bibendum
            laoreet. Donec sollicitudin, sapien nec aliquet dignissim, velit
            augue pulvinar erat, et interdum velit quam ut ligula. Fusce egestas
            nunc non tort!
          </p>

          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </div>

        <div className=" mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
