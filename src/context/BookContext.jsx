/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { createContext } from 'react';
import { Slide, toast } from 'react-toastify';
import { addReadListLocalDB, getAllReadLocalDB } from '../utils/LocalDB';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

const [readList, setReadList] = useState(()=> getAllReadLocalDB());
const [wishList, setWishList] = useState([]);


const handleMarkAsRead = (currentBook) =>{
  
// step 1:store book id or book object
// step 2:where to store
// step 3:array of object
// step 4:if the book already exist then show a alert ar toast
// step 5:if not then add the book in the array or collection
addReadListLocalDB(currentBook);

const isExistBook =  readList.find(
  (book) => book. bookId === currentBook.bookId );

if (isExistBook){
  toast.error("The book is already exist",{
    theme: "dark",
    autoClose: 1500,
    transition: Slide,
  });
}
else{
  setReadList([... readList, currentBook]);
  toast.success(`${currentBook.bookName} is added to read list` ,{
     theme: "dark",
    
    autoClose: 1500,
    transition: Slide,
  })
}
// console.log(currentBook,storedBooks, "book");
};

const handleWishList = (currentBook) =>{
  
// step 1:store book id or book object
// step 2:where to store
// step 3:array of object
// step 4:if the book already exist then show a alert ar toast
// step 5:if not then add the book in the array or collection


const isExistInReadList = readList.find(
    (book) => book.bookId === currentBook.bookId);

 if(isExistInReadList){
    toast.error("This book is already in read list",{
        theme: "dark",
        autoClose: 1500,
        transition: Slide,
    });
    return;
 }




const isExistBook = wishList.find(
    (book) => book.bookId === currentBook.bookId );

if (isExistBook){
  toast.error("The book is already exist",{
    theme: "dark",
    
    autoClose: 1500,
    transition: Slide,
  });
}
else{
  setWishList([...wishList, currentBook]);
  toast.success(`${currentBook.bookName} is added to wish list` ,{
     theme: "dark",
    autoClose: 1500,
    transition: Slide,
  })
}
// console.log(currentBook,storedBooks, "book");
};

    const data = {
       readList,
        setReadList,
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