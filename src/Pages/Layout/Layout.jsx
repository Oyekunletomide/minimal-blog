import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Header } from '../../Components/Header/Header'
import { FirstPost } from '../../Components/FirstPost/FirstPost'
import { OtherPost } from '../../Components/OtherPost/OtherPost'
import { FifthPost } from '../../Components/FifthPost/FifthPost'
import { SeeMoreBTN } from '../../Components/SeeMoreBTN/SeeMoreBTN'
import { Footer } from '../../Components/Footer/Footer'
import JSON from '../../Components/Assets/JSON'


export const Layout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <FirstPost posts={JSON} />
      <OtherPost posts={JSON} />
      <FifthPost posts={JSON} />
      <SeeMoreBTN />
      <Footer />
    </>
  )
}
