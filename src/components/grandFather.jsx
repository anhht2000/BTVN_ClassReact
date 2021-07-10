import React from 'react'
import Father from './father'
import Child from './child'

export default function GrandFather() {
    let obj = {
        id:1,
        name:'Tuan Anh',
        age:21,
        job:"student",
    }
    return (
        <div>
            <Father value={obj}/>
            <Child value={obj}/>
        </div>
    )
}
