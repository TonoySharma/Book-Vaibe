import React from 'react';
import bannerImg from "../../assets/pngwing 1.png"

const Bannar = () => {
    return (
 <div className="hero min-h-[70vh] my-5 container mx-auto rounded-2xl 
bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)]">
  <div className="hero-content flex-col lg:flex-row-reverse  w-full justify-between">
    <div className="hover-3d">
  {/* content */}
  <figure className="w-90 rounded-2xl ">
    <img src={bannerImg} alt="Tailwind CSS 3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    <div>
      <h1 className="text-5xl font-bold text-white">Books to freshen up<br></br> your bookshelf</h1>
      <button className="btn bg-gradient-to-br to-[#356290] text-purple-700 font-bold border-none mt-15">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Bannar;
