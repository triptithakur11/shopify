import React from 'react'
import Hero from './Hero'
import Popular from '../Popular/Popular'
import Offers from '../offers/Offers'
import Newcollection from '../Components/new collection/Newcollection'
import Newsletter from '../Components/NewsLetter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
    <Newsletter/>
    </div>
  )
}

export default Shop
