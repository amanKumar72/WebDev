import React from 'react'

function Card({song,indx,updateFavourite}) {
  const {image,name,artist,favourite}=song
  return (
    <div className='h-24 w-52 bg-white flex flex-col justify-self-center rounded-md mx-12 my-6'>
        <div className='flex p-3'>
          <img className='h-14 w-20 rounded-md object-cover' src={image} alt="" />
          <div className='mx-2'>
            <h1 className='text-base font-bold'>{name}</h1>
            <h3 className='text-sm  text-nowrap'>{artist}</h3>
          </div>
        </div>
        <div className='flex justify-center py-1' >
            <button onClick={()=>updateFavourite(indx)} className={`h-6 w-32 text-sm text-zinc-100 ${favourite?"bg-teal-600":'bg-orange-500'} px-2 py-1 flex justify-center items-center rounded-xl pd-2`}>{favourite?"added":'Add To Favourite'}</button>
        </div>
    </div>
  )
}

export default Card
