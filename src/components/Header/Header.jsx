import React from 'react'
import "./header.css"
import logo from "./assets/Logo.png"


export default function Header() {
    return (
        <header>
            <div id="left-header">
                <div id="menu">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li><a href="#arrow">HOME</a></li>
                        <li><a href="#arrow">EVENT</a></li>
                        <li><a href="#arrow">TICKETS</a></li>
                        <li><a href="#arrow">ABOUT</a></li>
                    </ul>
                </div>
                <div id="title">
                    <div id="arrow">Arrow</div>
                    <div>
                        <h1>
                            <img src="./src/components/Header/assets/stroke3.png" alt="" class="title-img" />
                            <img src="./src/components/Header/assets/music-show.png" alt="" class="title-img" />
                        </h1>
                        <h2>
                            <p id="thirst"><span >A PLACE TO QUENCH YOUR THIRST FOR MUSIC</span></p>
                            <p id="party"><span>PARTY OUT WITH US FOR THREE DAYS!</span></p>
                        </h2>
                        <p id="descr"><span className="highlighted">Lorem ipsum dolor sit amet</span> consectetur adipisicing elit. Ipsam, id! Officiis veniam fuga laboriosam. Quam beatae eveniet totam unde a, suscipit, accusamus possimus dolores et delectus aspernatur doloribus architecto magni.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <img src="./src/components/Header/assets/header_img_blacknwhite.jpg" alt="" />
            </div>
        </header>
    )
}
