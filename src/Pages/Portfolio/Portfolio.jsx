import React from 'react'
import picOne from '../About-Us/Assests/asset 8.jpeg'
import picTwo from '../About-Us/Assests/asset 9.jpeg'
import picThree from '../About-Us/Assests/asset 10.jpeg'
import './Portfolio.css'

export default function portfolio() {
  return (
    <>
    <div className="container-main-page">
    <section id="portfolio">
      <div class="head-text2">
        <h1>Our Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          optio hic obcaecati cupidit inventore architecto perferendis
          exercitationem minus laudantium! Sapiente.
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <img src={picOne} alt=""/>
          <div class="card-con">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div class="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
        <div class="card">
          <img src={picTwo} alt=""/>
          <div class="card-con">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div class="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
        <div class="card">
          <img src={picThree} alt=""/>
          <div class="card-con">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div class="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}
