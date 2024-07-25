import '../styles/Body.css';
import marchitecture_web from '../images/marchitecture_web.png.svg';
import SVG_margin from '../images/SVG_margin.svg';
import picture_voice_web from '../images/picture_voice_web.png.svg';

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
                    <a class="btn" href="/ada-landing-page">See Ada in action</a>
                    <a class="btn" href="/ada-landing-page">Learn more</a>
                </div>
                <img src={marchitecture_web}/>
            </section>
            <div className='main-content__achievements_container'>
                <div className='main-content__achievements'>
                    <div className='main-content__achievements__box '>
                        <img src={SVG_margin}/>
                        <p>Forrester</p>
                        <p>Conversational AI Wave
    Challenger</p>
                    </div>
                    <div className='main-content__achievements__box '>
                        <img src={SVG_margin}/>
                        <p>G2</p>
                        <p>High Performer Fall 2023</p>
                    </div>
                    <div className='main-content__achievements__box '>
                        <img src={SVG_margin}/>
                        <p>ITRG</p>
                        <p>Top Rated 2023</p>
                    </div>
                    <div className='main-content__achievements__box '>
                        <img src={SVG_margin}/>
                        <p>Globe & Mail</p>
                        <p>Top Growing Companies</p>
                    </div>
                </div>
            </div>
            <figure>
                <img/>
                <h2>Resolve more phone
calls with voice AI</h2>
                <p>Your customers are waiting — and they have been for some time — for the
seamless experience only Ada’s platform can provide. Add intelligent phone
automation using the same knowledge content in Ada’s easy-to-use
platform.</p>
                <a>Learn More About Ada Voice</a>
            </figure>
        </body>
    )
}

export default Body;