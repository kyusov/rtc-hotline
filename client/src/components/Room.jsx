import React from 'react'

export default function Room(props) {
    console.log(props)

    return (
        <>
        <div className="room">
            <img src={props.photo} alt="photo"/>
            <div className="desc">
                <span className="room-title">{props.title}</span>
                <span className="room-teacher">{props.teacher}</span>
            </div>
        </div>
            
        </>
    )
}

