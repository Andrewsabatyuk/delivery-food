import React from 'react'
import Navbar from '../Navbar'
import {MainContainer, MainContent, MainItems, MainH1, MainP, MainBtn} from './MainElements'

const Main = () => {
  return (
   <MainContainer>
    <Navbar/>
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
