import React from 'react'
import './Cards.css'
import { Cardsdata } from '../../Data/Data'
import Card from '../Card/Card'
function Cards() {
  return (
    <div className='Cards'>
     {Cardsdata.map((card,id)=>{
        return(
            <div className='parentContainer'>
            <Card 
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
            />

            </div>
        )
     })}
    </div>
  )
}

export default Cards
