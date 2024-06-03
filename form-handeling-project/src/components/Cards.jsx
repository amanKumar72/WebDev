import React from "react";
import Card from "./Card";
function Cards({users,handleRemove}) {
  return (
    <div className={`${!users.length&&'h-screen'} w-full bg-zinc-300 py-2 px-2 flex flex-wrap justify-center rounded-md`}>
      {users.map((user,index)=>{
        return <Card user={user} handleRemove={handleRemove} id={index} key={index}></Card>
      })}
    </div>
  );
}

export default Cards;
