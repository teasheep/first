import React from 'react';
import frontcover from './images/frontcover2.png';
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

function Body() {
  return (
    <div class="swiper-container hero-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide hero-content-wrap">
                <div><img src={frontcover} alt=""></img></div>

                <div class="hero-content-overlay position-absolute w-100 h-100">
                    <div class="outcontainer">
                        <div class="row h-100">
                             <div class="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                            
                                <header class="entry-header">
                                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                    <h1>履歷設計</h1>
                                    <h4>Better work for you</h4>
                                </header>

                                <div class="entry-content mt-4">
                                    <p>為客戶量身打造履歷、CV、個人文件、作品集等等</p>
                                </div>

                                <footer class="entry-footer d-flex flex-wrap align-items-center mt-5">
                                    {/* <a href="#" class="btn gradient-bg mr-2">Donate Now</a> */}
                                    < Button color = "info" > 立即下訂 </Button>{' '}
                                    &nbsp; &nbsp; &nbsp;
                                    {/* <a href="#" class="btn orange-border">查看更多</a> */}
                                    < Button outline color = "info" > 查看更多 </Button>{' '}
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
             <footer class="entry-footer d-flex flex-wrap align-items-center mt-5">
                 < Button color = "secondary" > Contact Us </Button>{' '}
                 < Button color = "secondary" > Contact Us </Button>{' '}
            </footer>

            {/* <div class="swiper-slide hero-content-wrap">
                      <div><img src="images/hero.jpg" alt=""></img></div>

                <div class="hero-content-overlay position-absolute w-100 h-100">
                    <div class="container h-100">
                        <div class="row h-100">
                            <div class="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                <header class="entry-header">
                                    <h1>Donate</h1>
                                    <h4>4 a better world</h4>
                                </header> 

                                <div class="entry-content mt-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                </div>
                                <footer class="entry-footer d-flex flex-wrap align-items-center mt-5">
                                    <a href="#" class="btn gradient-bg mr-2">Donate Now</a>
                                    <a href="#" class="btn orange-border">Read More</a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div class="swiper-slide hero-content-wrap">
                <div><img src="images/hero.jpg" alt=""></img></div>

                <div class="hero-content-overlay position-absolute w-100 h-100">
                    <div class="container h-100">
                        <div class="row h-100">
                            <div class="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                <header class="entry-header">
                                    <h1>Donate</h1>
                                    <h4>4 a better world</h4>
                                </header>

                                <div class="entry-content mt-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        {/* <div class="pagination-wrap position-absolute w-100">
            <div class="container">
                <div class="swiper-pagination"></div>
            </div>
        </div> */}


        {/* <div class="swiper-button-next flex justify-content-center align-items-center">
            <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></span>
        </div>

        <div class="swiper-button-prev flex justify-content-center align-items-center">
            <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></span>
        </div> */}
    </div>
  )
}
export default Body;
