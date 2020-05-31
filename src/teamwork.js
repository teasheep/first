import React from 'react';
import teamworkpic from './images/teamwork.png';
import donation from './images/donation.png';
import dove from './images/dove.png';

import './App.css';
import './bootstrap.min.css';
import './font-awesome.min.css';
import './elegant-fonts.css';
import './themify-icons.css';
import './swiper.min.css';
import './style.css';

import {
Button
} from 'reactstrap';

function Teamwork() {
  return (
    <div class="home-page-limestone">
        <div class="container">
            <div class="row align-items-end">
                <div class="coL-12 col-lg-6">
                    <div class="section-heading">
                        <h2 class="entry-title">我們致力於幫助需要完整個人簡歷的求職者，為每個人量身打造履歷</h2>

                        <p class="mt-5">We are committed to helping job seekers who need a full resume, tailored to each individual</p>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="milestones d-flex flex-wrap justify-content-between">
                        <div class="col-12 col-sm-4 mt-5 mt-lg-0">
                            <div class="counter-box">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src={teamworkpic} alt=""></img>
                                </div>

                                <div class="d-flex justify-content-center align-items-baseline">
                                    <div class="start-counter" data-to="120" data-speed="2000"></div>
                                    <div class="counter-k">K</div>
                                </div>

                                <h3 class="entry-title">Children helped</h3>
                            </div>
                        </div>

                        <div class="col-12 col-sm-4 mt-5 mt-lg-0">
                            <div class="counter-box">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src={donation} alt=""></img>
                                </div>

                                <div class="d-flex justify-content-center align-items-baseline">
                                    <div class="start-counter" data-to="79" data-speed="2000"></div>
                                </div>

                                <h3 class="entry-title">Water wells</h3>
                            </div>
                        </div>

                        <div class="col-12 col-sm-4 mt-5 mt-lg-0">
                            <div class="counter-box">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src={dove} alt=""></img>
                                </div>

                                <div class="d-flex justify-content-center align-items-baseline">
                                    <div class="start-counter" data-to="253" data-speed="2000"></div>
                                </div>

                                <h3 class="entry-title">Volunteeres</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Teamwork;
