// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// images
import FirstSlideim1 from './../../assets/nexgtv-entertainment-mobile-app-development.png';
import FirstSlideim2 from './../../assets/nexgtv-mobile-app-ui-design.png';
import FirstSlideim3 from './../../assets/world-communication-awards-for-best-digital-experience.png';
import SecondSlideim1 from './../../assets/veme-app-ui-design.png';
import SecondSlideim2 from './../../assets/veme-blockchain-app-developed.png';
import ThirdSlideim1 from './../../assets/nasa-fitness-tracking-mobile-app.png';
import ThirdSlideim2 from './../../assets/measure-total-body-weight-through-fitness-app.png';
import FourthSlideim1 from './../../assets/ux-strategy-for-mobile-app-devlopment.png';
import FourthSlideim2 from './../../assets/domi-img1.png';
import FourthSlideim3 from './../../assets/pizza_box.png';
import FourthSlideim4 from './../../assets/dominos-masala.png';
import FifthSlideim1 from './../../assets/karavan-social-networking-app-screen-1.png';
import FifthSlideim2 from './../../assets/karavan_2.png';
import FifthSlideim3 from './../../assets/social-networking-app-case-study.png';
import FifthSlideim4 from './../../assets/karavan-social-networking-app-screen-2.png';
import FifthSlideim5 from './../../assets/developers-for-social-media-app.png';
import SixSlideim1 from './../../assets/erp-app-development-service.png';
import sixthSlideim1 from './../../assets/melltoo-img2.png';
import sixthSlideim2 from './../../assets/melltoo-img1.png';
import sixthSlideim3 from './../../assets/mobile-app-of-the-year-by-entrepreneur.png';

// custom css
// import "./MobileSlider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const MobileSlider = () => {
    return (
        <div className="mobile-slider">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="item one">
                        <div className="image">
                            <div className="por">
                                <Image src={FirstSlideim1} alt="a"
                                    style={{ width: '60%', zIndex: '2', left: '-40px' }}
                                    className="img-fluid poa t0" />
                                <Image src={FirstSlideim2}
                                    style={{ width: '60%', right: '-5%', top: '0px', zIndex: '0' }}
                                    alt=""
                                    className="img-fluid poa" />
                            </div>
                        </div>
                        <div className="text" style={{ background: '#6616aa' }}>
                            <Image
                                style={{
                                    marginTop: '-40px',
                                    marginLeft: '20px',
                                    background: '#fff',
                                    border: '2px solid #6616aa',
                                    zIndex: "99",
                                    borderRadius: '15px',
                                    width: '90%'
                                }}
                                className="img-fluid por" src={FirstSlideim3} alt="im1" />

                            <div className="pnl30 text-white">
                                <h1 className="pb5">ABC 1</h1>
                                <p className="pb15">This is sample text for ABC 1.</p>
                                <div className="d-flex aic">
                                    <h4>View Case study -</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item two">
                        <div className="image" style={{ background: '#280f6d' }}>
                            <div className="d-flex">
                                <div className="w-50">
                                    <Image style={{ paddingTop: '90px' }} src={SecondSlideim2} alt="" className="img-fluid" />
                                </div>
                                <div className="w-50">
                                    <Image src={SecondSlideim1} style={{ marginTop: '-90px' }} alt="" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                        <div className="text grad-bg d-flex aic text-white">
                            <div className="pnl30">
                                <h1 className="pb5">ABC 1</h1>
                                <p className="pb15">This is sample text for ABC 1</p>
                                <div className="d-flex aic">
                                    <h3>CASE STUDY - </h3>
                                    <button style={{
                                        background: "#ff3cb9",
                                        border: '0',
                                        color: '#fff',
                                        padding: '10px 20px',
                                        margin: '10px',
                                        borderRadius: '25px'
                                    }}>Coming Soon</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item three">
                        <div className="image" style={{ background: '#24265a' }}>
                            <div className="d-flex">
                                <div className="w-50">
                                    <Image style={{ paddingTop: '90px' }} src={ThirdSlideim1} alt="" className="img-fluid" />
                                </div>
                                <div className="w-50">
                                    <Image src={ThirdSlideim2} style={{ marginTop: '-90px', width: '90%' }} alt="" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                        <div className="text d-flex aic text-white" style={{ background: '#1c1f47' }}>
                            <div className="pnl30">
                                <h1 className="pb5">ABC 1</h1>
                                <p className="pb15">This is sample text for ABC 1</p>
                                <div className="d-flex aic">
                                    <h3>CASE STUDY - </h3>
                                    <button style={{
                                        background: "#fff",
                                        border: '0',
                                        color: '#000',
                                        padding: '10px 20px',
                                        margin: '10px',
                                        borderRadius: '25px'
                                    }}>Coming Soon</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item four">
                        <div className="image por" style={{ background: '#1b2129' }}>
                            <div className="d-flex p30">
                                <div className="w-50">
                                    <Image style={{ paddingTop: '120px' }} src={FourthSlideim2} alt="" className="img-fluid" />
                                </div>
                                <div className="w-50">
                                    <Image src={FourthSlideim1} style={{ marginTop: '-60px' }} alt="" className="img-fluid" />
                                    <br />
                                    <Image src={FourthSlideim1} alt="" className="img-fluid" />
                                </div>
                            </div>

                            <Image src={FourthSlideim3} alt=""
                                style={{ width: '30%' }}
                                className="img-fluid t0 l0 poa" />

                            <Image src={FourthSlideim4} alt=""
                                style={{ width: '30%', top: '40%', right: '-20%' }}
                                className="img-fluid poa" />
                        </div>
                        <div className="text d-flex aic text-white"
                            style={{ background: '#25354a' }}>
                            <div className="pnl30">
                                <h1 className="pb5">ABC 1</h1>
                                <p className="pb15">This is sample text for ABC 1</p>
                                <div className="d-flex aic">
                                    <Link className="text-white" href='/'>View case study - -</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item five">
                        <div className="image por" style={{ background: '#1acae4' }}>
                            <div className="d-flex">
                                <div
                                    style={{ width: '40%', paddingLeft: '5px' }}
                                >
                                    <Image src={FifthSlideim1} alt="" className="img-fluid" />
                                    <br />
                                    <Image src={FifthSlideim2} alt="" className="img-fluid" />
                                </div>
                                <div
                                    style={{ width: '40%' }}
                                >
                                    <Image src={FifthSlideim3} style={{ marginTop: '-10px' }} alt="" className="img-fluid" />
                                    <br />
                                    <Image src={FifthSlideim4} alt="" className="img-fluid" />
                                </div>
                                <Image src={FifthSlideim5} alt=""
                                    style={{ top: '30%', right: '-30%', width: '50%' }}
                                    className="img-fluid poa" />
                            </div>
                        </div>
                        <div className="text d-flex aic text-white"
                            style={{ background: '#1264e7' }}>
                            <div className="pnl30">
                                <h1 className="pb5">ABC 4</h1>
                                <p className="pb15">This is sample text for ABC 4</p>
                                <div className="d-flex aic">
                                    <Link className="text-white" href='/'>View case study - -</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item five">
                        <div className="image" style={{ background: '#b19283' }}>
                            <Image src={SixSlideim1} alt="" className="img-fluid" />
                        </div>
                        <div className="text d-flex aic text-white"
                            style={{ background: '#072f96' }}>
                            <div className="pnl30">
                                <h1 className="pb5">ABC 4</h1>
                                <p className="pb15">This is sample text for ABC 4</p>
                                <div className="d-flex aic">
                                    <Link className="text-white" href='/'>View case study - -</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item seven">
                        <div className="image por" style={{ background: '#06bd6f' }}>
                            <div className="por p30">
                                <Image src={sixthSlideim1} alt="a"
                                    style={{ width: '75%', zIndex: '2' }}
                                    className="img-fluid l0 poa t0" />
                                <Image src={sixthSlideim2}
                                    style={{ width: '50%', left: '50%', zIndex: '0' }}
                                    alt=""
                                    className="img-fluid poa" />                            </div>
                        </div>
                        <div className="text d-flex aic text-white por"
                            style={{ background: '#00824b' }}>
                            <Image
                                style={{
                                    marginTop: '-40px',
                                    marginLeft: '20px',
                                    background: '#fff',
                                    zIndex: "99",
                                    borderRadius: '15px',
                                    top: '0'
                                }}
                                className="img-fluid poa" src={sixthSlideim3} alt="im1" />


                            <div className="pnl30">
                                <h1 className="pb5">XYZ 1</h1>
                                <p className="pb15">This is sample text for XYZ 1</p>
                                <div className="d-flex aic">
                                    <h3>CASE STUDY - </h3>
                                    <button style={{
                                        background: "#fff",
                                        border: '0',
                                        color: '#000',
                                        padding: '10px 20px',
                                        margin: '10px',
                                        borderRadius: '25px'
                                    }}>Coming Soon</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default MobileSlider;