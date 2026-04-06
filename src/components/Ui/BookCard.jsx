
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-200 shadow border border-gray-300 hover:shadow-xl transition duration-300">
      
      <figure className="p-5">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-[350px] w-full"/>
      </figure>

      <div className="card-body">
        
        <div className="flex items-center gap-2 flex-wrap">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge bg-[#22be0a1e] text-green-500 font-semibold text-sm" >
              {tag}
            </div>
          ))}
        </div>

        <h2 className="card-title font-bold text-xl">
          {book.bookName}
        </h2>

        <p className="font-semibold text-gray-600">
          {book.author}
        </p>

        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
          
          <div className="badge badge-outline border-none font-semibold">
            {book.category}
          </div>

          <div className="badge badge-outline border-none font-bold flex items-center gap-1">
            {book.rating}
            <FaStarHalfAlt />
          </div>

        </div>
      </div>
    </Link>
  );
};

export default BookCard;