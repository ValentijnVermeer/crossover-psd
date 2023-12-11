import React from 'react'
import "./newsletter.css"

export default function Newsletter() {
    return (
        <div id="newsletter">
            <div id="newsletter-left">
                <h3 id="news-title">NEWS<span>LETTER</span></h3>
                <form action="">
                    <input type="text" name="" id="" placeholder='ENTER YOUR FULL NAME' />
                    <input type="text" name="" id="" placeholder='ENTER THE SUBJECT' />
                    <textarea rows="10" cols="50" placeholder='ENTER YOUR MESSAGE' />
                    <button>Confirm</button>
                </form>
            </div>
            <div id="news-img">
                <img src="./src/components/Newsletter/assets/newsletter_img_blacknwhite.jpg" alt="" />
            </div>
        </div>
    )
}
