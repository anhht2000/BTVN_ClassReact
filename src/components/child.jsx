import React from 'react'

export default function Child(props) {
    return (
        <div>
            <div>
                <h1>This is Child's Component</h1>
                <h3>My name is: {props.value.name}</h3>
                <h3>My age is: {props.value.age}</h3>
                <h3>My job is: {props.value.job}</h3>
            </div>
        </div>
    )
}
