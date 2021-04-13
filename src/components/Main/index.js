import React, {useState}from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {MainContainer, MainContent, MainItems, MainH1, MainP, MainBtn} from './MainElements'

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
   <MainContainer>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <MainContent>
      <MainItems>
        <MainH1>Most delisious pizza in city</MainH1>
        <MainP>Ready in 15 minutes</MainP>
        <MainBtn>Got it</MainBtn>
      </MainItems>
    </MainContent>
   </MainContainer>
  )
}

export default Main
