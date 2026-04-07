import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="group card bg-white shadow-md border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 rounded-2xl overflow-hidden">
      {/* Book Image */}
      <figure className="p-4 bg-gray-50 flex items-center justify-center">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4 flex flex-col justify-between gap-3">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="badge bg-green-100 text-green-700 font-semibold text-xs sm:text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <h2 className="card-title font-bold text-lg sm:text-xl text-gray-800">
          {book.bookName}
        </h2>
        <p className="text-gray-600 font-medium">{book.author}</p>

        {/* Card Actions */}
        <div className="flex justify-between items-center border-t border-dashed border-gray-300 pt-3 mt-2">
          <span className="badge badge-outline border-none font-semibold text-sm text-gray-700">
            {book.category}
          </span>

          <span className="badge badge-outline border-none font-bold text-sm text-yellow-500 flex items-center gap-1">
            {book.rating} <FaStarHalfAlt />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;