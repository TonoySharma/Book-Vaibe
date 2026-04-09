import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
  const { handleMarkAsRead, handleWishList } = useContext(BookContext);
  const { bookId: bookParamsId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find(
    book => book.bookId === Number(bookParamsId)
  );

  if (!expectedBook)
    return <p className="text-center mt-10">Book not found.</p>;

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-8 bg-white shadow-md rounded-2xl p-6 my-20 bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] ">

      {/* Book Image */}
      <div className="flex items-center justify-center rounded-2xl p-6">
        <div className="hover-3d">
  {/* content */}
  <figure className="w-60 rounded-2xl">
    <img src={image}alt="Tailwind CSS 3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
      </div>

      {/* Book Details */}
      <div className="flex flex-col justify-between space-y-5">

        <div className="space-y-3">
            <h3 className='border border-gray-700 w-fit px-2 rounded-full font-semibold text-white'>{bookId}</h3>
          <h2 className="text-3xl  font-bold text-white">
            {bookName}
          </h2>

          <p className="text-gray-400 font-medium">
            By {author}
          </p>

          <p className="text-sm font-semibold text-green-400">
            Category: {category}
          </p>

          <p className="text-gray-400">
            <span className="font-semibold text-white">Review: </span>
            {review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-green-100 text-green-700 text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Info */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 pt-3 border-t">

            <p>
              <span className="font-semibold text-white">Pages:</span> <span className='text-gray-300'>
                {totalPages}
              </span>
            </p>

            <p>
              <span className="font-semibold text-white">Rating:</span> <span className='text-gray-300'>
                {rating}
              </span>
            </p>

            <p>
              <span className="font-semibold text-white">Publisher:</span> <span className='text-gray-300'>
                {publisher}
              </span>
            </p>

            <p>
              <span className="font-semibold text-white">Year:</span> <span className='text-gray-300'>{yearOfPublishing}</span>
            </p>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">

          <button
            onClick={() => handleMarkAsRead(expectedBook)}
            className="btn bg-green-500 border-none hover:bg-green-700 text-white flex-1"
          >
            Mark as Read
          </button>

          <button
            onClick={() => handleWishList(expectedBook)}
            className="btn bg-blue-500 border-none hover:bg-blue-700 text-white flex-1"
          >
            Add to Wishlist
          </button>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;