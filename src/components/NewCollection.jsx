import React from 'react'
import newcollction from './assets/new_collections'
import Item from './item/Item'
const NewCollection = () => {
  return (
    <div className='new-collection flex flex-col gap-5 mt-10'>
   <h1 className='text-center text-[50px] font-[600]'>New Collection</h1>
   <hr className='p-[5px] w-[300px] m-[auto]' />
   <div className='collection  grid grid-cols-4 gap-[20px]'>
    {newcollction.map((item,i)=>{
      return <Item key={i} 
        id={item.id}
        name={item.name} 
        image={item.image}
        new_price={item.new_price} 
        old_price={item.old_price}/>
    })}
   </div>
    </div>
  )
}

export default NewCollection