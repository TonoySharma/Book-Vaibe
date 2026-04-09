import React, { use } from 'react';
import BookCard from '../Ui/BookCard';



const booksPromise = fetch ("/booksData.json")
.then(res=>res.json());

const AllBooks = () => {
    const books = use (booksPromise)
    // console.log(books);



    return (
        <div className='my-10 container mx-auto grid'>
            <h1 className='font-bold text-4xl text-center'>Explore the World of Bestselling Books</h1>
            <p className='text-center flex justify-center my-3 font-semibold text-gray-500'>Stay up to date with what’s popular and discover the perfect book for your next read.</p>

   <div className='grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-10 gap-6 '>
    
         {books.map((book,id)=>{
                return <BookCard key={id} book={book}></BookCard>
    
            })}
   </div>

        </div>
    );
};

export default AllBooks;