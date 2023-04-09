import React from 'react';

const Product = ({ cards,addTocart }) => {
  
    return (
        <div className='py-10'>
            <div className="card h-[400px] w-full bg-base-100 shadow-xl">
                <figure><img className='h-[50%] w-full mx-auto' src={cards.picture}alt="Shoes" /></figure>
                <div className=" h-[50%]">
                    <h2 className="card-title my-4">
                        {cards.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='font-bold text-xl my-4'>Price: {cards.price}</p>
                    <div className="card-actions justify-end">
                    <button onClick={()=>addTocart(cards)}
                     className="w-[90%] mx-auto p-2 rounded-md btn-secondary">Bye Now</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;