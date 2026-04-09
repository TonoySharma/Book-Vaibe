/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../Ui/BookCard';
import { FaHeart } from 'react-icons/fa';

const ReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);

  const [filterReadList, setFilterReadList] = useState([]);

  useEffect(() => {
    let sortedData = [...readList];

    if (sortingType === 'pages') {
      sortedData.sort((a, b) => b.totalPages - a.totalPages);
    } 
    else if (sortingType === 'rating') {
      sortedData.sort((a, b) => b.rating - a.rating);
    }

    setFilterReadList(sortedData);
  }, [sortingType, readList]);

  if (filterReadList.length === 0) {
    return (
      <div className="bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] 
      h-[50vh] flex flex-col items-center justify-center text-center space-y-4">

        <p className="p-5 rounded-full bg-pink-400">
          <FaHeart className="h-[30px] w-[30px] text-white" />
        </p>

        <h2 className="text-xl font-medium text-white">
          Your read list is empty
        </h2>

        <p className="text-gray-300 max-w-md">
          Save books you want to read later. Find something you love and add it to your read list.
        </p>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          filterReadList.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default ReadList;