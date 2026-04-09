import { FaStarHalfAlt } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="group card shadow border border-gray-200 hover:shadow-lg transition duration-300 rounded-xl overflow-hidden">
        
      {/* Book Image */}
      <div>
       <figure className="p-3 bg-gray-200 flex items-center justify-center">
        
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-lg h-[200px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
      </figure>
      </div>

      {/* Card Body */}
      <div className="card-body p-3 flex flex-col gap-2">

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="badge bg-green-100 text-green-700 font-semibold text-[11px]">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <h2 className="font-bold text-base text-gray-800 leading-tight">
          {book.bookName}
        </h2>

        <p className="text-gray-600 text-sm">{book.author}</p>

        {/* Card Actions */}
        <div className="flex justify-between items-center border-t border-dashed border-gray-300 pt-2 mt-1">
          <span className="text-xs font-semibold text-gray-600">
            {book.category}
          </span>

          <span className="text-xs font-bold text-yellow-500 flex items-center gap-1">
            {book.rating} <FaStarHalfAlt />
          </span>
        </div>

        <button className="text-sm font-semibold border border-gray-200 rounded-full cursor-pointer w-fit py-1 px-3 bg-white hover:bg-pink-500 hover:text-white transition">
          Book Details <GoArrowRight className="inline"/>
        </button>

      </div>
    </Link>
  );
};

export default BookCard;