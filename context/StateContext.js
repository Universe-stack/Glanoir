import React, {createContext, useContext, useState, useEffect} from "react";

const Context = createContext(); 
import {toast} from 'react-hot-toast';

export const StateContext =({children})=>{

    const [showCart, setShowCart]= useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice]= useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    
    const onAdd = (product,quantity)=> {
        
        const checkProductInCart = cartItems.find((item)=> item._id === product._id);
        
        if(checkProductInCart){
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price*quantity);
            setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities + quantity);
            
            for (let i = 0; i < cartItems.length; i++) {
                const cartProduct = cartItems[i];
                if(cartProduct._id === product._id){
                    cartProduct.quantity += quantity
                }}
            const updatedCartItems= cartItems;

            setCartItems((prev)=>prev = updatedCartItems);
            
        } else{
            product.quantity = quantity;
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price*quantity);
            setCartItems([...cartItems, {...product}])
            setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities + quantity);
        }  

        toast.success(`${qty} ${product.name} added to the cart`)
    }

    //remove from cart
    const onRemove= (product)=> {
        foundProduct = cartItems.find((item)=> item._id === product._id);

        const newCartItems = cartItems.filter((item)=> item._id !== product._id);

        setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
    }


    const toggleCartItemQuantity = (id,value) => {
        
        foundProduct = cartItems.find((item) => item._id === id);
        

        console.log(cartItems, id)
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
    } 

    

    const incQty =()=>{
        setQty((prevQty)=> prevQty + 1);
    }

    const decQty =()=>{
        setQty((prevQty)=> {
            if(prevQty-1<1) return 1;

            return prevQty - 1;
        });
    }

    


    return(

        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                onRemove,
                toggleCartItemQuantity

            }}
        >
            {children}
        </Context.Provider>
    ) 
}

export const useStateContext = ()=> useContext(Context);