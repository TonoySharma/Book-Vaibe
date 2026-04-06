import React, { useState } from 'react';
import { createContext } from 'react';
import { Slide, toast } from 'react-toastify';

export const BookContext = createContext();


const BookProvider = ({ children }) => {

const [storedBooks, setStoredBooks] = useState([]);
const [wishList, setWishList] = useState([]);

const handleMarkAsRead = (currentBook) =>{
  
// step 1:store book id or book object
// step 2:where to store
// step 3:array of object
// step 4:if the book already exist then show a alert ar toast
// step 5:if not then add the book in the array or collection
const isExistBook = storedBooks.find((book) => book. bookId === currentBook.bookId );

if (isExistBook){
  toast.error("The book is already exist",{
    theme: "dark",
    position: "top-center",
    autoClose: 1500,
    transition: Slide,
  });
}
else{
  setStoredBooks([...storedBooks, currentBook]);
  toast.success(`${currentBook.bookName} is added to read list` ,{
     theme: "dark",
    position: "top-center",
    autoClose: 1500,
    transition: Slide,
  })
}
console.log(currentBook,storedBooks, "book");
};

const handleWishList = (currentBook) =>{
  
// step 1:store book id or book object
// step 2:where to store
// step 3:array of object
// step 4:if the book already exist then show a alert ar toast
// step 5:if not then add the book in the array or collection


const isExistInReadList = storedBooks.find(
    (book) => book.bookId === currentBook.bookId);

 if(isExistInReadList){
    toast.error("This book is already in read list");
    return;
 }




const isExistBook = wishList.find(
    (book) => book.bookId === currentBook.bookId );

if (isExistBook){
  toast.error("The book is already exist",{
    theme: "dark",
    position: "top-center",
    autoClose: 1500,
    transition: Slide,
  });
}
else{
  setWishList([...wishList, currentBook]);
  toast.success(`${currentBook.bookName} is added to wish list` ,{
     theme: "dark",
    position: "top-center",
    autoClose: 1500,
    transition: Slide,
  })
}
// console.log(currentBook,storedBooks, "book");
};

    const data = {
       storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        handleWishList,
        setWishList
    };
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;