// src/DateTime.js
import React, { useState, useEffect } from 'react';

function DateTime() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every second
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>{dateTime.toLocaleString()}</h1>
            
        </div>
    );
}

export default DateTime;
