import React,{useState} from "react";


function Profiles() {
  const [users,setUsers]= useState( [
    {
      image:
        "https://images.unsplash.com/photo-1515938736719-95b568dc8dd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      title: "aman kumar",
      description: "An engineering student at R.D. Engineering college.",
      gender: "male",
    },
    {
      image:
        "https://media.istockphoto.com/id/1071808064/photo/confident-businessman-dressed-in-an-elegant-suit-standing-outdoors-against-cityscape.webp?s=170667a&w=0&k=20&c=c7BfSqVlqJAmyvxp6c7jsaIN0l3ZhFgxas1I8-V8EeI=",
      title: "yash sharma",
      description: "An engineering student at R.D. Engineering college.",
      gender: "male",
    },
    {
      image:
        "https://media.istockphoto.com/id/922482992/photo/the-future-is-bright.webp?s=170667a&w=0&k=20&c=OuTyqlGzksF3rACnzMjJcCKYyQHd1JR9EloetoQNnbo=",
      title: "aashu kumar",
      description: "An engineering student at R.D. Engineering college.",
      gender: "male",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "shani kumar gupta",
      description: "An engineering student at R.D. Engineering college.",
      gender: "male",
    },
  ]);
  function handelRemove(indx){
    setUsers(()=>{
      return users.filter((val,inx)=>inx!=indx)
    })
  }
  return (
    <div className="bg-zinc-200 h-full md:h-screen  w-full pt-5 pb-5  flex items-center justify-center gap-4 flex-wrap">
      {users.map((val, indx) => (
        <div
          key={indx}
          className="card w-48 bg-zinc-100 overflow-hidden rounded"
        >
          <div className="w-full h-40 bg-zinc-300">
            <img
              className="w-full h-full object-cover object-top"
              src={val.image}
              alt="img"
            />
          </div>
          <div className="w-full px-3 py-4">
            <h1 className="font-semibold text-lg text-center">
              {val.gender == "male" ? "Mr. " : "Mrs. "}
              {val.title}
            </h1>
            <p className="text-sm text-wrap text-center">{val.description}</p>
          </div>
          <div className="flex justify-center">
            <button onClick={()=>handelRemove(indx)} className="bg-red-500 text-zinc-100 px-4 py-1 m-2 place-self-center  rounded">
              remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profiles;
