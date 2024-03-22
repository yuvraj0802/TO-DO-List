import React, { useState } from 'react'
export default function Dialog(props) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    return (
        <div>
                <div className='dialogParent'>
                    <div className='dialog'>
                        <div >
                            <h3>Title</h3>
                            <br />
                            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='mybtn'></input>
                            <br />
                            <h3>Description</h3>
                            <textarea rows="5" cols="31" className='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <br />
                            <br />
                            <button className='mybtn' onClick={() => props.myfun(true,title,description)}>Add</button>
                        </div>
                    </div>
                </div>

        </div>
    ) 
}
