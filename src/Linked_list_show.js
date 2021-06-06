import React from 'react'
import './llshow.css';
import Node from './Node.js'

function Linked_list_show({lister}) {
    // const lister = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,12,1,1,1,1,1,1,1,1,1,1,1,1,1];
    return (
        <div className="llshow">
            <div className="show">
            {lister.map((e)=>{
                return (
                    <>
                    < Node value={e} />
                    </>
                )
            })}
            </div>
            
        </div>
    )
}

export default Linked_list_show

