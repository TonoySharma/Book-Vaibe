import React from 'react';

const Footer1 = () => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] border-b border-b-gray-500'>

        <h1 className='text-white text-3xl flex text-center justify-center p-5'>Frequently asked questions</h1>
      
      <div className='container mx-auto text-white p-5 '>

        {/* item 1 */}
        <div className="collapse border-b border-gray-500 rounded-none">
          <input id="collapse-1" type="checkbox" className="peer" />
          <label htmlFor="collapse-1" className="collapse-title font-semibold cursor-pointer text-xl">
            How do I create an account?
          </label>

          <div className="collapse-content text-sm">
            Simply click the "Add to Read List" button on any book card. If the book is already in your list, you will get a notification letting you know it has been added before.
          </div>
        </div>

        {/* item 2 */}
        <div className="collapse border-b border-gray-500 rounded-none">
          <input id="collapse-2" type="checkbox" className="peer" />
          <label htmlFor="collapse-2" className="collapse-title font-semibold cursor-pointer text-xl">
            Can I read the same book twice in my list?
          </label>

          <div className="collapse-content text-sm">
            No — Book Vibe automatically checks your read list before adding. If you try to add a duplicate, an alert will appear with the book name so you know it is already saved.
          </div>
        </div>

        {/* item 3 */}
        <div className="collapse border-b border-gray-500 rounded-none">
          <input id="collapse-3" type="checkbox" className="peer" />
          <label htmlFor="collapse-3" className="collapse-title font-semibold cursor-pointer text-xl">
            How many books can I add to my read list?
          </label>

          <div className="collapse-content text-sm">
            There is no limit! You can add as many books as you like to your read list and browse them anytime from the Listed page.
          </div>
        </div>

        {/* item 4 */}
        <div className="collapse border-b border-gray-500 rounded-none">
          <input id="collapse-5" type="checkbox" className="peer" />
          <label htmlFor="collapse-4" className="collapse-title font-semibold cursor-pointer text-xl">
            How do I find books by category or genre?
          </label>

          <div className="collapse-content text-sm">
            You can browse books by category such as Fantasy, Fiction, Mystery, Non-Fiction, and more. Use the category filter on the home page to narrow down books that match your taste.
          </div>
        </div>
        <div className="collapse border-b border-gray-500 rounded-none">
          <input id="collapse-4" type="checkbox" className="peer" />
          <label htmlFor="collapse-4" className="collapse-title font-semibold cursor-pointer text-xl">
            Is BookVibe free to use?
          </label>

          <div className="collapse-content text-sm">
            Yes, BookVibe is completely free for readers.
          </div>
        </div>

      </div>

    </div>
  );
};

export default Footer1;

