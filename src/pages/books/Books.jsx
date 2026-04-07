
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../components/listedBook/ReadList';
import WishList from '../../components/listedBook/WishList';
import { useState } from 'react';



const Books = () => {
const [sortingType, setSortingType] = useState("");
console.log(sortingType ,"sortingType");
    return (
        <div className='container mx-auto my-5'> 
         <div >
               {/*dropdown  */}

            <div className='flex justify-center my-4' >
           <div className="dropdown dropdown-start ">
  <div tabIndex={0} role="button" className="btn m-1">Sort by : {sortingType} ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSortingType('pages') }><a>Pages</a></li>
    <li onClick={()=> setSortingType('rating')}><a>Rating</a></li>
  </ul>
</div>
            </div>

             {/* tabs */}
  <Tabs>
    <TabList>
      <Tab>Read list</Tab>
      <Tab> Wish list</Tab>
    </TabList>

    <TabPanel>
      <ReadList sortingType={sortingType}></ReadList>
    </TabPanel>
    <TabPanel>
      <WishList sortingType={sortingType}></WishList>
    </TabPanel>
  </Tabs>
         </div>
        </div>
    );
};

export default Books;