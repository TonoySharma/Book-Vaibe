import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
  const { handleMarkAsRead, handleWishList } = useContext(BookContext);
  const { bookId: bookParamsId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find(book => book.bookId === Number(bookParamsId));

  if (!expectedBook) return <p className="text-center mt-10">Book not found.</p>;

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
    <div className="container mx-auto mt-8 grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Book Image */}
      <div className="bg-gray-100 flex items-center justify-center p-6 rounded-2xl">
        <figure className="w-full max-w-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt={bookName}
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </figure>
      </div>

      {/* Book Details */}
      <div className="p-6 flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-green-600 font-semibold text-lg">Book ID: {bookId}</h3>
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <p className="text-gray-700 font-medium">By: {author}</p>
          <p className="border-t border-gray-300 pt-3 font-semibold">{category}</p>

          <p className="border-t border-gray-300 pt-3 text-gray-800">
            <span className="font-bold">Review: </span>
            {review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="font-bold">Tags:</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-green-100 text-green-700 font-semibold text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Info */}
          <div className="border-t border-gray-300 pt-4 space-y-2 text-gray-700">
            <p>
              <span className="font-bold">Number of Pages: </span>
              <span className="font-medium">{totalPages}</span>
            </p>
            <p>
              <span className="font-bold">Publisher: </span>
              <span className="font-medium">{publisher}</span>
            </p>
            <p>
              <span className="font-bold">Year of Publishing: </span>
              <span className="font-medium">{yearOfPublishing}</span>
            </p>
            <p>
              <span className="font-bold">Rating: </span>
              <span className="font-medium">{rating} / 5</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button
            onClick={() => handleMarkAsRead(expectedBook)}
            className="btn btn-success flex-1"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(expectedBook)}
            className="btn btn-info text-white flex-1"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;