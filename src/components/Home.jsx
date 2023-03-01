import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment} from "../redux/slices/counter/"
function Home() {
    return (
        <div>
            <p> </p>
            <button onClick={()=>dispatch(increment())}>Obtener productos</button>
        </div>
    );
}

export default Home;