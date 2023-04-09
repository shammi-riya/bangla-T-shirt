import React from 'react';

const Calculation = ({cart,handleDelete,handleDltAll}) => {
    console.log(cart);
  
    return (
        <div className='bg-white shadow-lg p-5 text-gray-600 '>
           {
            cart.map(singleCart=>{
                return(
                  <div key={singleCart._id} className='flex justify-between border p-4 border-spacing-3'>
                    <h3 >{singleCart.name}</h3>
                    <p>price:{singleCart.price}</p>
                    <button onClick={()=>handleDelete(singleCart._id)}
                     className='py-2 px-3 text-white w-12 bg-pink-600'>Dlt</button>
                    </div>

                )
            })
           }
           
        <div className='py-6'>
        {
            cart.length>1?
            <button onClick={handleDltAll}
            className='py-2 px-3 text-white w-28 bg-pink-700'>remove All</button>
            : <h3>please add item</h3>
           
          }
        </div>
        </div>
    );
};

export default Calculation;