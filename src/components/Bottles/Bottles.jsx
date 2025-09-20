import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { addToSoreCart, getStoreCart, removeFromCart } from '../../Utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise);

    //useEffect
    useEffect(() =>{
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds,bottles)
        const storedCart =[]

        for(const id of storedCartIds){
            // console.log(id)

            

            const cartBottle = bottles.find(bottle => bottle.id === id);

            if(cartBottle){
                storedCart.push(cartBottle);

            }
        }

        setCart(storedCart)

    },[bottles])

    const handleAddToCart =(bottle) => {
        // console.log("bottole",bottle)


        const newCart = [...cart, bottle]
        setCart(newCart);

        //save the bootle id

        addToSoreCart(bottle.id);
    }
       

    const handleRemoveFromCart = id => {
        const remainindCart = cart.filter(bottle => bottle.id !==id)
        setCart(remainindCart);

        removeFromCart(id);
    }

    // console.log(bottles);
    return (
        <div>
            <h3>Bottle: {bottles.length}</h3>
            <p>Added to cart : {cart.length} </p>

            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
 
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id}  handleAddToCart={ handleAddToCart}
                        bottle={bottle}></Bottle>)
                }

            </div>
        </div>
    );
};

export default Bottles;