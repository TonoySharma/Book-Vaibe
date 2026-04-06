import React from 'react';
import bannerImg from "../../assets/pngwing 1.png"

const Bannar = () => {
    return (
 <div className="hero bg-base-200 min-h-[70vh] my-8 container mx-auto rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse  w-full justify-between">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up<br></br> your bookshelf</h1>
      <button className="btn btn-success text-white mt-15">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Bannar;
