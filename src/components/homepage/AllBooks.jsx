import React, { use } from 'react';
import BookCard from '../Ui/BookCard';



const booksPromise = fetch ("/booksData.json")
.then(res=>res.json());

const AllBooks = () => {
    const books = use (booksPromise)
    // console.log(books);



    return (
        <div className='my-10 container mx-auto grid'>
            <h1 className='font-bold text-4xl text-center'>Books</h1>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-6 '>
    
         {books.map((book,id)=>{
                return <BookCard key={id} book={book}></BookCard>

                
            })}
   </div>

        </div>
    );
};

export default AllBooks;