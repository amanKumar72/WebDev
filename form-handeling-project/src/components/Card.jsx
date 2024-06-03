import React from 'react'

function Card({user,handleRemove,id}) {
  return (
    <div  className='h-56 w-48 mx-2 my-2 bg-zinc-100 rounded-md flex  flex-col justify-center items-center'>
        <div className=' w-full flex justify-center'>
            <img className='h-12 md:h-16 w-12 md:w-16 rounded-full object-cover ' src="https://images.unsplash.com/photo-1715868158574-d83d274384f7?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h1 className='font-bold my-1 md:text-lg '>{user.name} </h1>
        <h1 className='font-semibold my-1 opacity-70 text-xs md:text-md text-center'>{user.email} </h1>
        <h2 className='font-semibold my-1 text-xs md:text-md text-center'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolore.</h2>
        <button onClick={()=>handleRemove(id)} className='w-20 bg-red-600 text-zinc-100 rounded-md my-2 '>remove</button>
    </div>
  )
}

export default Card
