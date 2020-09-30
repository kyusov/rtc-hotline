import React,{useState,useEffect} from 'react'
import Room from "./Room"
import arrow from "../assets/img/arrow-up.png"

function Main(props) {
    // const rooms = props
    const [rooms,setRooms] = useState('')
    useEffect(() => {
        setRooms(props.rooms)
    }, [])


    return (
        <>
        <main>
            <div className="container">
                <div className="wrapper">
                   
                    <div className="rooms">

                        <div className="searchRoom">
                            <input type="text" placeholder="Поиск комнаты"/>
                        </div>
                        {rooms?rooms.map((el,i)=>(<Room key={i} {...el}/>)): <div>ERROR</div>}
                    </div>
                    <div className="video">
                        <div className="video-player"></div>
                        <div className="video-chat">
                        <div className="chat"></div>
                            <div className="chat-panel">
                            
                                <div className="chat-input">
                                    
                                    <input type="text"/>
                                </div>
                                <div className="chat-btn">
                                    <a href="">
                                        <img src={arrow} alt=""/>
                                    </a>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

// {list?list.map((el,i)=>(<Card key={i} {...el} addFav={addFav}/>)):<div className="fail"></div>}
export default Main
