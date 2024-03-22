import React from 'react'
import List from './List'
// import UpdateUser from './UpdateUser';

export default function ListedData(p) {
    return (
        <div className='dialogParent'>
            <div className=' mydialog'>
                <div>
                    <div className='set'><h2>TITLE</h2></div>
                    <div className='set'> <h2>DESCRIPTION</h2> </div>
                    <br />
                    {p.list.map((item, i) =>
                        <div key={i}>
                            <List title={item.title} description={item.description}  id={i} deleteUser={p.deleteUser} updateUser={p.updateUser}/>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    )
}
