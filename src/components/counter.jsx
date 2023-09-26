import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if (!(count <= 0)) {
            setCount(count - 1);
        }

    }
    return (
        <div className='flex items-center flex-col justify-center'>
            <h1>Counts:{count}</h1>
            <button className='h-14 w-32 bg-black text-white' onClick={inc}>Increment</button>
            <button className='h-14 w-32 bg-black text-white' onClick={dec}>Decrement</button>
        </div>
    );
}
