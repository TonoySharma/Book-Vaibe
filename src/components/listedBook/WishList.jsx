/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../Ui/BookCard';

const WishList = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);
    // console.log(wishList, "bookContext");

    const [filterWishList, setFilteredWishList] = useState(wishList);

    useEffect(() => {
        if (sortingType) {
            if (sortingType === "pages") {
                const sortedData = [...wishList].sort(
                    (a, b) => a.totalPages - b.totalPages,
                );
                console.log(sortedData);
                setFilteredWishList(sortedData);
            } else if (sortingType === "rating") {
                const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
                console.log(sortedData);
                setFilteredWishList(sortedData);
            }
        }
    }, [sortingType, wishList]);

    if (filterWishList.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-2xl border border-gray-200  '>
            <h2 className='text-xl'>No wish list data found</h2>
        </div>
    }


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filterWishList.map((book, ind) => (<BookCard key={ind} book={book}></BookCard>
                    ))}
            </div>
        </div>
    );
};

export default WishList;