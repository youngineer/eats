import { useState } from "react";

const Cart = () => {
    const[count, setCount] = useState(0);

    return(
    <div className="container">
        <h1 className="header">Cart Page</h1>
        <h3 className="description">Cool things coming soon</h3>
        <h4>count: {count}</h4>
        <button onClick={() => {
            setCount(count - 1);
        }}>Decrease count</button>
    </div>
    );
};

export default Cart;