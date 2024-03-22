import React, { useState } from 'react'
import { FcFullTrash } from "react-icons/fc";
import UpdateUser from './UpdateUser';
import { set } from 'mongoose';
export default function List(props) {
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(false);
    }
    return (
        <div>
            {show ? <UpdateUser id={props.id} updateUser={props.updateUser} handleShow={handleShow} /> :
                <div className='in2'>
                    <li className='inl'>
                        <h1>{props.title}</h1>
                        <h2>{props.description}</h2>

                    </li>
                    <button className='btn' onClick={() => setShow(true)}>Edit</button>
                    <button className='btn' onClick={() => props.deleteUser(props.id)}>
                        <span className="icons">
                            <span className="icon"><FcFullTrash /></span>
                        </span>
                    </button>
                </div>}

        </div>
    )
}
