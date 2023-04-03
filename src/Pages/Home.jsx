import React from 'react'
import Service from '../Components/Servicess/Service'
import Phome from '../Components/Products/Phome'
import Products_Details from '../Components/Products/Products_Details'
import Single from '../Components/Products/Single-P_Details'
import Text from '../Components/Products/Text'
import Banner from '../Components/Products/Banner'
import Info from '../Components/Contact/Info';
import RegistrationForm from '../Components/Registration/RegistrationForm'
import Footer from '../Components/Contact/Footer'

const Home = () => {
  return (

    <>
        <Service/>
        <Phome/>
        <Text/>
        <Products_Details/>
        <Single/>
        <Banner/>
        <Info/>
        <RegistrationForm/>
        <Footer/>
    </>
  )
}

export default Home