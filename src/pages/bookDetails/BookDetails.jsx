
import { useLoaderData, useParams } from 'react-router';

// const booksPromise = fetch ("/booksData.json")
// .then(res=>res.json());


const BookDetails = () => {
const {bookId:bookParamsId} = useParams();
// console.log(bookParamsId, "bookId");

//  const books = use (booksPromise);
//   console.log(books,"books");

  const books = useLoaderData();
//   console.log(books,"books");

 const expectedBook = books.find(book => book.bookId == Number(bookParamsId))
//  console.log(expectedBook, "expectedBook");
const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expectedBook
    return (
       <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto mt-8 rounded-2xl">
  <div className="bg-gray-100 flex items-center justify-center rounded-2xl p-6">
  
  <div className="hover-3d">
    
    {/* Main Image */}
    <figure className="w-[300px] rounded-2xl overflow-hidden">
      <img
        src={image}
        alt={bookName}
        className="w-full h-[400px] object-cover rounded-2xl"
      />
    </figure>

    {/* 3D effect divs (must have) */}
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
  <div className="card-body space-y-3">
    <h3 className='font-semibold text-2xl'>{bookId}</h3>
    <h2 className="card-title text-3xl font-bold">{bookName}</h2>
    <p className='font-semibold'>By: {author}</p>
    <p className='border-t border-t-gray-300 py-3 font-semibold'>{category}</p>
    <p className='border-t border-t-gray-300 py-3 text-gray-800'>
      <span className='font-bold '>Review: </span>
      {review}</p>
            <div className="flex items-center gap-5 flex-wrap">
               <h2 className='font-bold'>Tag</h2>
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge bg-[#22be0a1e] text-green-700 font-semibold text-sm">
              <span># {tag}</span>
            </div>
          ))}
        </div>
        <div className='space-y-4 border-t border-t-gray-300 py-4'>
        <div>
            <span className='font-bold'>Number of Pages :</span> <span className='font-medium'>totalPages</span>
        </div>
        <div>
            <span className='font-bold'>Publisher :</span> <span className='font-medium'>{publisher}</span>
        </div>
        <div>
            <span className='font-bold'>Year of Publishing :</span> <span className='font-medium'>{yearOfPublishing}</span>
        </div>
        <div>
            <span className='font-bold'>TotalPages :</span> <span className='font-medium'>{totalPages}</span>
        </div>
        <div>
            <span className='font-bold'>Rating :</span> <span className='font-medium'>{rating}</span>
        </div>
        </div>
    <div className="card-actions gap-5">
      <button className="btn mt-4">Mark as Read</button>
      <button className="btn btn-info text-white mt-4">Add to Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;