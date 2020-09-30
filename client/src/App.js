import React from 'react'
import {Header, Main, Footer} from "./components"
import "./assets/style/App.scss"

let rooms = [
            {photo:"https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png", title:"лек. Технологии разработки программного обеспечения",teacher:"Зинченко А. С."},
            {photo:"https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png", title:"лек. Вычислительные системы и компьютерные сети",teacher:"Казимиров А. С."},
            {photo:"https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png", title:"лек. Технологии разработки программного обеспечения",teacher:"Зинченко А. С."},
            {photo:"https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png", title:"лек. Вычислительные системы и компьютерные сети",teacher:"Казимиров А. С."},
            {photo:"https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png", title:"лек. Технологии разработки программного обеспечения",teacher:"Зинченко А. С."},
            {photo:"https://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png", title:"лек. Вычислительные системы и компьютерные сети",teacher:"Казимиров А. С."}
          ]

function App() {
  return (
    <div className="App">
      <Header/>
      <Main rooms={rooms}/>
      <Footer/>
      
    </div>
  )
}

export default App
