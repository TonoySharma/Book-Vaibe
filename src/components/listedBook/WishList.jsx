/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../Ui/BookCard';
import { FaHeart } from 'react-icons/fa';

const WishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  const [filteredWishList, setFilteredWishList] = useState([]);

  useEffect(() => {
    let updatedList = [...wishList];

    if (sortingType === 'pages') {
      updatedList.sort((a, b) => b.totalPages - a.totalPages); // more pages first
    } 
    else if (sortingType === 'rating') {
      updatedList.sort((a, b) => b.rating - a.rating); // higher rating first
    }

    setFilteredWishList(updatedList);
  }, [wishList, sortingType]);

  // Empty state
  if (!filteredWishList.length) {
    return (
      <div className="bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] 
      h-[50vh] flex flex-col items-center justify-center text-center space-y-4 rounded-2xl mb-20">

        <p className="p-5 rounded-full bg-pink-400">
          <FaHeart className="h-[30px] w-[30px] text-white" />
        </p>

        <h2 className="text-xl font-medium text-white">
          Your wishlist is empty
        </h2>

        <p className="text-gray-300 max-w-md">
          Save books you want to read later. Find something you love and add it to your wishlist.
        </p>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredWishList.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishList;