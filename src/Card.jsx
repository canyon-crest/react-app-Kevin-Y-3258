import './Card.css'
import { useState } from 'react'

function Card({name, description}){

    const [count, setCount] = useState(0);

    return (
        <div className='myCard'>
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <div className="button-container">
                <button onClick={() => setCount(count + 1)}>Add {name} to cart</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
            <p>Total {name}: {count}</p>
        </div>
    )
}

export default Card
