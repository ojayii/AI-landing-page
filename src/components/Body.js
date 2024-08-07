import '../styles/Body.css';
import marchitecture_web from '../images/marchitecture_web.png.svg';
import SVG_margin from '../images/SVG_margin.svg';
import picture_voice_web from '../images/picture_voice_web.png.svg';
import tango from '../images/tango.svg';
import digicel from '../images/digicel.svg';
import moka from '../images/moka.svg';
import mc_row3_vector from '../images/mc_row3_vector.svg';
import testimonial_bayley from '../images/testimonial_bayley.jpg.svg';
import airasia from '../images/airasia.svg.svg';
import chevron2 from '../images/chevron2.svg'

const Body = () => {
    return(
        <body className='main-content'>
            <section className='main-content__section-one'>
                <h2>Basic chatbots have no business
representing your business</h2>
                <p>Ditch code-heavy, old school scripted chatbots. Integrate Ada with
your existing business systems to resolve complex customer
inquiries in record time.</p>
                <div class="main-content__section-one__links header__btn-container">
                    <a class="btn btn__bg-purple" href="/ada-landing-page">See Ada in action</a>
                    <a class="btn" href="/ada-landing-page">Learn more</a>
                </div>
                <img src={marchitecture_web}/>
            </section>
            <div className='main-content__achievements_container'>
                <div className='main-content__achievements'>
                    <div className='main-content__achievements__box '>
                        {/* <img src={SVG_margin}/> */}
                        <div className='trophy-img'/>
                        <p>Forrester</p>
                        <p>Conversational AI Wave
    Challenger</p>
                    </div>
                    <div className='main-content__achievements__box '>
                        <div className='trophy-img'/>
                        <p>G2</p>
                        <p>High Performer Fall 2023</p>
                    </div>
                    <div className='main-content__achievements__box '>
                        <div className='trophy-img'/>
                        <p>ITRG</p>
                        <p>Top Rated 2023</p>
                    </div>
                    <div className='main-content__achievements__box '>
                        <div className='trophy-img'/>
                        <p>Globe & Mail</p>
                        <p>Top Growing Companies</p>
                    </div>
                </div>
            </div>
            <section className='main-content__section-two'>
                <img src={picture_voice_web} className='main-content__section-two__left'/>
                <div className='main-content__section-two__right'>
                    <h3>Resolve more phone calls with voice AI</h3>
                    <p>Your customers are waiting — and they have been for some time — for the seamless experience only Ada’s platform can provide. Add intelligent phone automation using the same knowledge content in Ada’s easy-to-use platform.</p>
                    <a href='' className='btn btn__bg-purple'>Learn More About Ada Voice</a>
                </div>
            </section>
            <div className='main-content__bottom'>
                <section className='main-content__bottom__row1'>
                    <h4>
                        <span>4,272,090,866</span>
                        <span>conversations automated</span>
                    </h4>
                    <div className='main-content__bottom__row1__grid-container'>
                        <div>
                            <div className='main-content__bottom__row1__grid-container__box grid-one'>
                                <span>Up to</span>
                                <span>77%</span>
                                <span>of customer service interactions
    resolved through automation</span>
                            </div>
                            <div className='main-content__bottom__row1__grid-container__box grid-two'>
                                <span>50+</span>
                                <span>languages supported instantly</span>
                            </div>
                        </div>
                        <div>
                            <div className='main-content__bottom__row1__grid-container__box grid-three'>
                                <img src={tango}/>
                                <span>6.7x ROI in year 1</span>
                            </div>
                            <div className='main-content__bottom__row1__grid-container__box grid-four'>
                                <img src={digicel}/>
                                <span>$750k savings / year</span>
                            </div>
                            <div className='main-content__bottom__row1__grid-container__box grid-five'>
                                <img src={moka}/>
                                <span>95% recognition rate</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='main-content__bottom__row2'>
                    <img src={mc_row3_vector}/>
                    <h5>Automate your customer
service with Ada</h5>
                    <a className='btn btn__bg-purple'>Request a Demo</a>
                </section>
                <section className='main-content__bottom__row3'>
                    <div className='main-content__bottom__row3__left'>
                        <h6>AI-powered
automation built
for CX teams</h6>
                        <a className='btn btn__bg-purple'>View all Case Studies</a>
                    </div>
                    <div className='main-content__bottom__row3__right'>
                        <div className='col1'>
                            <img src={airasia}/>
                            <div>
                                <span>75%</span>
                                <span>inquiries resolved</span>
                            </div>
                            <div>
                                <span>11</span>
                                <span>languages supported</span>
                            </div>
                            <div>
                                <span>8x</span>
                                <span>increase in product
upsell</span>
                            </div>
                        </div>
                        <div className='col2'>
                            <a href=''>Read the Air Asia Case Study
                                <img src={chevron2}/>
                            </a>
                            <p>“Ada has supported our customer's agents to contribute to the overall
ancillary income through our Customer Happiness contact channels by
selling eight times more ancillary products compared with 12 months
ago.”</p>
                            <figure>
                                <img src={testimonial_bayley}/>
                                <figcaption>
                                    <span>Bayley Clark</span>
                                    <span>Head of Customer Support Strategy</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </body>
    )
}

export default Body;