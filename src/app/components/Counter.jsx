"use client";
import React, { useState } from 'react';

const Counter = () => {
    console.log('counter')
    const [count,setcount]=useState(0)

    const handelincress=()=>{
        console.log("incress button click")
        setcount(count +1)
    }
    return (
        <div>
            <h2 className='text-4xl font-bold '>Counter {count} </h2>
           <button  onClick={handelincress} className="btn btn-success">Incress!</button>
        </div>
    );
};

export default Counter;