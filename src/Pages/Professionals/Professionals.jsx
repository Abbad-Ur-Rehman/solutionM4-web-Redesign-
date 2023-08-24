import React from 'react'
import './Professionals.css'
import proPix from '../About-Us/Assests/asset 1.jpeg'
export default function Professionals() {
  return (
    <>
    <div className="container-main-page">
    <section id="Professionals">
      <div class="left-contant">
        <div class="top-text">
          <h1>We are Professionals</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod.
          </p>
        </div>

        <div class="icons-contant">
          <div class="first">
            <i class="fa-regular fa-file-lines"></i>

            <div class="icon-text">
              <h2>Ideas & Plans</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div class="second">
            <i class="fa-regular fa-file-lines"></i>

            <div class="icon-text">
              <h2>Ideas & Plans</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-contant">
        <img src={proPix} alt="" />
      </div>
    </section>
    </div>
    </>
  )
}
