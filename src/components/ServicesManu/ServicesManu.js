import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Foodsitems from '../Fooditems/Foodsitems';
import './ServiceManu.css';

const ServicesManu = () => {
    const [foods, setfoods] = useState([]);
    const [selectedFoodType, setselectedFoodType] = useState("Breakfast")
    useEffect(() => {
        fetch('../../database.json')
            .then(res => res.json())
            .then(data => setfoods(data))
    }, []);
    const selectedFoods = foods.filter(food => food.type === selectedFoodType);
    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="custom">
                        <ul>
                            <li onClick={() => setselectedFoodType('Breakfast')}>Breakfast</li>
                            <li onClick={() => setselectedFoodType('Lunch')}>Lunch</li>
                            <li onClick={() => setselectedFoodType('Dinner')}>Dinner</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    selectedFoods.map(food => <Foodsitems key={food.id} food={food}></Foodsitems>)
                }
            </div>

        </div>
    );
};

export default ServicesManu;