import React from 'react';

const AddToCartContext = React.createContext({
    items : [] ,
    add : () => {} ,
    plus : () => {} ,
    neg : () => {} ,
    clear : () => {},
})                
export default AddToCartContext;


