import React from 'react'

export default function Father(props) {
    return (
        <div>
            <h1>This is Father's Component</h1>
            <h3>My name is: {props.value.name}</h3>
            <h3>My age is: {props.value.age}</h3>
            <h3>My job is: {props.value.job}</h3>
        </div>
    )
}
