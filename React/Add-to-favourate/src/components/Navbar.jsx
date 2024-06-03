import React from "react";

function Navbar({songs}) {
  return (
    <div className="h-20 w-full px-8 py-10 md:py-30 flex justify-between ">
      <h1 className="text-xl font-semibold text-orange-500">Music</h1>
      <div className="h-8 text-zinc-100 flex items-center px-2 py-1  bg-orange-500 rounded-xl ">
        <h2 className="mr-2">Favourites</h2>
        <h2>{songs.filter(songs=>songs.favourite).length}</h2>
      </div>
    </div>
  );
}

export default Navbar;
