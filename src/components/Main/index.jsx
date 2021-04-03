import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import { HelpCard } from '../HelpCard'

export const MainPage = () => {
    
    return <div className={css.mainPage}>
        <div className={css.container}>
            <nav>
                <span>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div>
                    <p>Thrivetalk</p>
                    <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p>Our highly talented therapists can help you with a range of
                    issues including relationships, sex, PTSD, depression, social
              anxiety, or even just caring for yourself more.</p>
                    <div>
                        <button>WHO AM I</button>
                        <button>WHAT DO I DO</button>
                    </div>
                </div>
                <div>
                    <img src={mainPic} alt="" />
                </div>
            </div>
        </div>

        <div> 
            <h5 className={css.h5}>WE CAN HELP YOU WITH</h5>

            <div className ={css.cart}>
                <HelpCard className ={css.helpcart} bg="#FFE2DE" title="Weight Lifting" />
                <HelpCard className ={css.helpcart2} bg="#C4E769" title="Running  & Spinning" />
                <HelpCard className ={css.helpcart3} bg="#62D0DF" title="Pumping Iron" />
                <HelpCard className ={css.helpcart4} bg="#0052C1" title="Pumping Iron" />
            </div>

        </div>
    </div>
}