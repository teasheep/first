import React from 'react';
import logo from './images/person2.png';
import './App.css';
import './bootstrap.min.css';
import './font-awesome.min.css';
import './elegant-fonts.css';
import './themify-icons.css';
import './swiper.min.css';
import './style.css';
import './expand.css';

import {
  Button
} from 'reactstrap';

function Head() {
  return (
     <header class="site-header">
        <div class="top-header-bar">
            <div class="outcontainer">
                <div class="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
                    <div class="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                        <div class="header-bar-email">
                            MAIL: <a href="#">person@gmail.com</a>
                        </div>

                        <div class="header-bar-text">
                            <p>LINE: <span>@person</span></p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                        < Button color = "info" > Contact Us </Button>{' '}
                        {/* <div class="donate-btn">
                            <a href="#">Donate Now</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        <div class="nav-bar">
            <div class="outcontainer">
                <div class="row">
                    <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div class="site-branding d-flex align-items-center">
                           <a class="d-block" href="index.html" rel="home"><img class="d-block" src={logo} alt="logo" height="50" width="200"></img></a>
                        </div>

                        <nav class="site-navigation d-flex justify-content-end align-items-center">
                            <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                <li class="current-menu-item"><a href="index.html">首頁</a></li>
                                <li><a href="about.html">關於我們</a></li>
                                <li><a href="portfolio.html">作品集錦</a></li>
                                <li><a href="news.html">問與答</a></li>
                            </ul>
                        </nav>

                        <div class="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Head;
