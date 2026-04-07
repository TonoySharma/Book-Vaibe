/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../Ui/BookCard';

const WishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  const [filteredWishList, setFilteredWishList] = useState([]);

  // Update filtered list when wishList or sortingType changes
  useEffect(() => {
    let updatedList = [...wishList];

    if (sortingType === 'pages') {
      updatedList.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === 'rating') {
      updatedList.sort((a, b) => b.rating - a.rating); // Higher rating first
    }

    setFilteredWishList(updatedList);
  }, [wishList, sortingType]);

  // Empty state
  if (!filteredWishList.length) {
    return (
      <div className="h-[50vh] flex items-center justify-center bg-gray-100 rounded-2xl border border-gray-200">
        <h2 className="text-xl font-medium text-gray-700">No books in your wishlist</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredWishList.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default WishList;