import React from 'react'
import "../stylesheets/Mainpage.css"
import logo from "../asserts/logo.png"
import trophy from "../asserts/1.png"
import groupPhoto from "../asserts/2.png"
import machines from "../asserts/3.png"
import fb from "../asserts/fb.png"
import telephone from "../asserts/telephone.png"
import web from "../asserts/web.png"

function Mainpage() {
  return (
    <div className='container'>
      <div className="logo">
        <img src={logo} width={300} alt="logo" />
      </div>

      <div className="upperBody">
        <div className="leftPart">
            <img src={trophy} alt="trophy" />
        </div>
        <div className="rightPart">
            <b id='boldMargin' >C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
            <div style={{marginLeft: "25px"}}>
                <p> &bull; C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                <p> &bull; C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p>
            </div>

            <img src={groupPhoto} alt="trophy" />
            <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State. </p>
        </div>
      </div>

      <div className="lowerBody">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>

        <img src={machines} alt="machines" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      
      <div className="footer">
        <hr className='redLine' />
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        <p style={{margin: "15px 0"}}>
          CHEMICALS & PROCESS <b className='redPipe'>|</b> POWER <b className='redPipe'>|</b>WATER & WASTE WATER <b className='redPipe'>|</b> OILS & GAS <b className='redPipe'>|</b> PHARMA <b className='redPipe'>|</b> SUGARS & DISTILLERIES <b className='redPipe'>|</b> PAPER & PULP <b className='redPipe'>|</b> MARINE & DEFENCE <b className='redPipe'>|</b> METAL & MINING <b className='redPipe'>|</b> FOOD & BEVERAGE <b className='redPipe'>|</b> PETROCHEMICAL & REFINERIES <b className='redPipe'>|</b> SOLAR <b className='redPipe'>|</b> BUILDING <b className='redPipe'>|</b> HVAC <b className='redPipe'>|</b> FIRE FIGHTING <b className='redPipe'>|</b> AGRICULTURE & RESIDENTIAL
          </p>
          <div className="last">
            <a style={{cursor: "default"}} href="/"><img src={telephone} alt="telephone" /></a>
            <a style={{marginTop: "5px"}} target='_blank' rel="noreferrer" href="https://www.facebook.com/cripumps"><img src={fb} alt="fb" /></a>
            <a target='_blank' rel="noreferrer" href="https://www.crigroups.com/"><img src={web} alt="web" /></a>
          </div>
      </div>

    </div>
  )
}

export default Mainpage
