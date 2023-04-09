import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Calculation from '../Calculatoion/Calculation';

const Home = () => {
    const CardsData = useLoaderData()
    const [cart, setCart] = useState([]);




    const addTocart = (cardsData) => {

        const exitsCart = cart.find(singlrCart => singlrCart._id == cardsData._id);
        if (exitsCart) {
            alert("already exit")
        } else {
            const newCart = [...cart, cardsData];
            setCart(newCart);
        }





    }

    const handleDelete = (id) => {
        const remaining = cart.filter(pd => pd._id !== id)
        setCart(remaining)
    }
    const handleDltAll = () => {
        setCart([])
    }
    return (
        <div className='flex lg:flex-row flex-col gap-3'>

            <div className='Lg:w-[68%] w-full'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                    {
                        CardsData.map(cards => <Product
                            key={cards._id}
                            addTocart={addTocart}
                            cards={cards}
                        ></Product>)
                    }
                </div>
            </div>
            <div className='lg:w-[30%]  w-full py-10'>
                <Calculation
                    handleDltAll={handleDltAll}
                    handleDelete={handleDelete}
                    cart={cart}
                ></Calculation>
            </div>
        </div>
    );
};

export default Home;