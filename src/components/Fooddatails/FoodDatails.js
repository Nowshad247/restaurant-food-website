import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FoodDatails.css'
const FoodDatails = (props) => {
    const { id } = useParams();
    const [food, setFood] = useState([]);
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(1);
    useEffect(() => {
        fetch(`https://red-onion-backend.herokuapp.com/food/` + id)
            .then(res => res.json())
            .then(data => {
                setFood(data)
                setprice(data.price)
            })
    }, []);

    return (
        <div className='container'>
            <div className="row row justify-content-between">
                <div className="col-md-6">
                    <h1>{food.name}</h1>
                    <p>
                        {food.fullDescription}
                    </p>
                    <h1>$ {price * quantity}</h1>
                    <div className='inputbox'>
                        <button className='btn-price-number' onClick={() => setquantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <input type="text" value={quantity} />
                        <button className='btn-price-number' onClick={() => setquantity(quantity + 1)}>+</button>
                    </div>
                    <button className="btn btn-danger signup">Add To Card</button>
                </div>
                <div className="col-md-6">
                    <img src={food?.images} className='img-fluid item-img' alt="" />
                </div>
            </div>

        </div>
    );
};

export default FoodDatails;