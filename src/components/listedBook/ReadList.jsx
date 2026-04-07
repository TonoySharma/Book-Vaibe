/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../Ui/BookCard';

const ReadList = ({sortingType}) => {
    const { readList} = useContext(BookContext);
    // console.log( readList, "bookContext");
const [filterReadList,setFilterReadList] = useState(readList)

    useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...readList].sort((a, b)=> a.totalPages - b.totalPages);

                // console.log(sortedData)
                setFilterReadList(sortedData);
        }else if(sortingType === "rating"){
             const sortedData = [...readList].sort((a, b)=> a.rating - b.rating);

                // console.log(sortedData)
                setFilterReadList(sortedData);
        };
        }
    }, [sortingType, readList]);



      if( filterReadList.length === 0){
    return <div className='h-[50vh] bg-gray-100 flex items-center justify-center rounded-2xl border border-gray-200  '>
        <h2 className='text-xl'>No read list data found</h2>
    </div>
  }
    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
             filterReadList.map((book, ind) =>( <BookCard key={ind} book={book}></BookCard>
        ))}
          </div>
        </div>
    );
};

export default ReadList;