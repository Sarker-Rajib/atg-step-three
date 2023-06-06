import React, { useEffect } from 'react';

// images
import FirstSlideim1 from './../../assets/nexgtv-entertainment-mobile-app-development-copy.png';
import FirstSlideim2 from './../../assets/nexgtv-mobile-app-ui-design-copy.png';
import FirstSlideim3 from './../../assets/world-communication-awards-for-best-digital-experience.png';
import SecondSlideim1 from './../../assets/veme-app-ui-design.png';
import SecondSlideim2 from './../../assets/veme-blockchain-app-developed.png';
import ThirdSlideim1 from './../../assets/nasa-fitness-tracking-mobile-app.png';
import ThirdSlideim2 from './../../assets/measure-total-body-weight-through-fitness-app.png';
import FourthSlideim1 from './../../assets/ux-strategy-for-mobile-app-devlopment.png';
import FourthSlideim2 from './../../assets/domi-img1.png';
import FourthSlideim3 from './../../assets/pizza_box.png';
import FourthSlideim4 from './../../assets/dominos-bread.png';
import FourthSlideim5 from './../../assets/dominos-bread1.png';
import FifthSlideim1 from './../../assets/karavan-social-networking-app-screen-1.png';
import FifthSlideim2 from './../../assets/karavan_2.png';
import FifthSlideim3 from './../../assets/social-networking-app-case-study.png';
import FifthSlideim4 from './../../assets/karavan-social-networking-app-screen-2.png';
import FifthSlideim5 from './../../assets/developers-for-social-media-app.png';
import SixSlideim1 from './../../assets/erp-app-development-service.png';
import sixthSlideim1 from './../../assets/melltoo-img2.png';
import sixthSlideim2 from './../../assets/melltoo-img1.png';
import sixthSlideim3 from './../../assets/mobile-app-of-the-year-by-entrepreneur.png';
import nasa from './../../assets/nasa-mobile-app.png';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';


const DeskView = () => {

    useEffect(() => {
        AOS.init({
            mirror: true,
        });
    }, [])

    return (
        <div className='wide-screen-content'>
            <PageScroller style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* <PageNav /> */}
                <PageIndicator />

                {/* page 1 */}
                <Page className='d-flex' style={{ overflow: 'hidden' }}>
                    <div
                        className='left first'
                        style={{
                            width: '45%',
                            height: '100%',
                            background: '#6614ab',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                background: '#6614ab',
                                borderRadius: '50%',
                                top: '10%',
                                right: '-14%',
                                width: '35%',
                                zIndex: '2'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >

                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="3"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="0, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#ffffff91"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#ffffff91"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#ffffff91"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#ffffff91"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#ffffff91"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#ffffff91"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                borderRadius: '50%',
                                top: '21%',
                                right: '1%',
                                zIndex: '3',
                                textAlign: 'right',
                                color: '#fff'
                            }}
                        >
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                className='big-font'>25+ millions Downloads</h1>
                            <p data-aos="fade-up">an app store and google play store</p>
                        </div>

                        <div data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                display: 'inline-block',
                                borderRadius: '50%',
                                zIndex: '3',
                                color: '#fff',
                                width: '100%',
                            }}
                            className="text-white poa b0 l0 p50">
                            <Image src={FirstSlideim3} alt="a" className='img-fluid pb20' />
                            <h1 className="pb20 big-font">ABC 1</h1>
                            <p className="pb50">This is sample text for ABC 1.</p>
                            <div className="d-flex aic jcb">
                                <Link className='text-white' href='/'>View Case study -</Link>
                                <Link className='text-white' href='/'>S K I P</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '55%',
                            background: '#c9c8cb'
                        }}
                        className='right first d-flex aic jcc p50'>
                        <div className='d-flex p50'>
                            <div>
                                <Image data-aos="fade-up" src={FirstSlideim1} alt="q" className='img-fluid' />
                            </div>
                            <div data-aos="fade-up">
                                <Image src={FirstSlideim2} alt="q" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </Page>

                {/* page 2 */}
                <Page className='d-flex' style={{ overflow: 'hidden' }}>
                    <div
                        className='left first'
                        style={{
                            width: '45%',
                            height: '100%',
                            background: '#502ad0',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                background: '#502ad0',
                                borderRadius: '50%',
                                top: '10%',
                                right: '-14%',
                                width: '35%',
                                zIndex: '2'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >

                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="140, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="#0092FF"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                borderRadius: '50%',
                                top: '20%',
                                right: '1%',
                                zIndex: '3',
                                textAlign: 'right',
                                color: '#fff'
                            }}
                        >
                            <p
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true" style={{
                                    textAlign: 'left',
                                }}>The next big</p>
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true" className='big-font'>Blockchain</h1>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true">revolution</p>
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                borderRadius: '50%',
                                zIndex: '3',
                                color: '#fff',
                                width: '100%',
                            }}
                            className="text-white poa b0 l0 p50">
                            <h1
                                data-aos="fade-right"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                className="pb20 big-font">ABC 2</h1>
                            <p className="pb50">We are the best development <br /> company of the world</p>
                            <div className="d-flex aic jcb">
                                <p className='text-white'
                                    style={{ opacity: '0.5' }}
                                >Coming soon</p>
                                <Link className='text-white' href='/'>S K I P</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '55%',
                            background: '#1d0462',
                            paddingInline: '80px'
                        }}
                        className='right second'>
                        <div
                            style={{ height: '100%' }}
                            className='d-flex  jcc por'>
                            <div className='poa l0 w-50'
                                style={{ top: "35%" }}>
                                <Image
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    data-aos-duration="4000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    src={SecondSlideim2} alt="q" className='img-fluid' />
                            </div>
                            <div className='poa r0 t0 w-50'>
                                <Image
                                    data-aos="fade-down"
                                    data-aos-delay="50"
                                    data-aos-duration="4000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    src={SecondSlideim1} alt="q" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </Page>

                {/* page 3 */}
                <Page className='d-flex' style={{ overflow: 'hidden' }}>
                    <div
                        className='left third'
                        style={{
                            width: '45%',
                            height: '100%',
                            background: '#10133b',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                background: '#10133b',
                                borderRadius: '50%',
                                top: '10%',
                                right: '-14%',
                                width: '35%',
                                zIndex: '2'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >

                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="285, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="#0092FF"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className='nasa-div'
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                borderRadius: '50%',
                                right: '1%',
                                zIndex: '3',
                                textAlign: 'right',
                                color: '#fff',
                            }}
                        >
                            <p
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true" style={{
                                    textAlign: 'left',
                                }}>Powered by</p>
                            <Image
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                style={{ maxWidth: '250px' }}
                                src={nasa} alt="p" />
                            <p
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true">algorithms</p>
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                borderRadius: '50%',
                                zIndex: '3',
                                color: '#fff',
                                width: '100%',
                            }}
                            className="text-white poa b0 l0 p50">
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                className="pb20 big-font">ABC 3</h1>
                            <p className="pb50">We are the best web <br />development company <br /> of the world</p>
                            <div className="d-flex aic jcb">
                                <p className='text-white'
                                    style={{ opacity: '0.5' }}
                                >Coming soon</p>
                                <Link className='text-white' href='/'>S K I P</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '55%',
                            background: '#16184a',
                            paddingInline: '80px',
                            overflow: 'hidden'
                        }}
                        className='right third'>
                        <div
                            style={{ height: '100%' }}
                            className='d-flex  jcc por'>
                            <div className='poa l0 w-50'
                                style={{ top: '20%' }}
                            >
                                <Image
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                    data-aos-duration="4000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    src={ThirdSlideim1} alt="q" className='img-fluid' />
                            </div>
                            <div className='poa r0 t0 w-50'>
                                <Image
                                    data-aos="fade-down"
                                    data-aos-delay="50"
                                    data-aos-duration="4000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    style={{ marginTop: '-150px', width: '85%' }}
                                    src={ThirdSlideim2} alt="q"
                                    className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </Page>

                {/* page 4 */}
                <Page className='d-flex' style={{ overflow: 'hidden' }}>
                    <div
                        className='left fourth'
                        style={{
                            width: '45%',
                            height: '100%',
                            background: '#18283e',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                background: '#18283e',
                                borderRadius: '50%',
                                top: '10%',
                                right: '-14%',
                                width: '35%',
                                zIndex: '2'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >

                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="415, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="#0092FF"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="1"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="1"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="1"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                borderRadius: '50%',
                                top: '20%',
                                right: '0',
                                zIndex: '3',
                                textAlign: 'right',
                                color: '#fff',
                            }}
                        >
                            <p style={{
                                textAlign: 'left',
                            }}>Powered by</p>
                            <h1 className='big-font'>UX Strategy</h1>
                            <p>algorithms</p>
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                borderRadius: '50%',
                                zIndex: '3',
                                color: '#fff',
                                width: '100%',
                            }}
                            className="text-white poa b0 l0 p50">
                            <h1 data-aos="fade-up"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true" className="pb20 big-font">ABC 4</h1>
                            <p className="pb50">We are the best web <br />development company <br /> of the world</p>
                            <div className="d-flex aic jcb">
                                <p className='text-white'
                                    style={{ opacity: '0.5' }}
                                >Coming soon</p>
                                <Link className='text-white' href='/'>S K I P</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '55%',
                            background: '#0e151c',
                            paddingInline: '80px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                        className='right fourth'>
                        <Image
                            data-aos="fade-down"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                width: '40%',
                                top: '0'
                            }}
                            src={FourthSlideim1} alt="q" className='img-fluid' />
                        <Image
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                top: '40%',
                                left: '70px',
                                width: '40%',
                            }}
                            src={FourthSlideim2} alt="q" className='img-fluid' />
                        <Image
                            style={{
                                position: 'absolute',
                                top: '-75px',
                                left: '0',
                                width: '40%',
                            }}
                            src={FourthSlideim3} alt="q" className='img-fluid' />
                        <Image
                            style={{
                                position: 'absolute',
                                top: '0px',
                                right: '10px',
                                width: '10%',
                            }}
                            src={FourthSlideim4} alt="q" className='img-fluid' />
                        <Image
                            style={{
                                position: 'absolute',
                                bottom: '0px',
                                right: '0px',
                                width: '25%',
                            }}
                            src={FourthSlideim5} alt="q" className='img-fluid' />
                    </div>
                </Page>

                {/* page 5 */}
                <Page className='d-flex' style={{ overflow: 'hidden' }}>
                    <div
                        className='left fifth'
                        style={{
                            width: '45%',
                            height: '100%',
                            background: '#0e489d',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                background: '#0f53bc',
                                borderRadius: '50%',
                                top: '10%',
                                right: '-14%',
                                width: '35%',
                                zIndex: '2'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >

                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="540, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="#0092FF"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="1"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="1"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                borderRadius: '50%',
                                top: '20%',
                                right: '0',
                                zIndex: '3',
                                textAlign: 'right',
                                color: '#fff',
                            }}
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                        >
                            <p style={{
                                textAlign: 'left',
                            }}>The Headline</p>
                            <h1 className='big-font'>Text Headline</h1>
                            <p>Footer Headline</p>
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                borderRadius: '50%',
                                zIndex: '3',
                                color: '#fff',
                                width: '100%',
                            }}
                            className="text-white poa b0 l0 p50">
                            <h1 data-aos="fade-right"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                className="pb20 big-font">ABC 5</h1>
                            <p className="pb50">We are the best web <br />development company <br /> of the world</p>
                            <div className="d-flex aic jcb">
                                <Link href='/' className='text-white'
                                >View Case Study</Link>
                                <Link className='text-white' href='/'>S K I P</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '55%',
                            background: '#24c2d2',
                            paddingInline: '80px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                        className='right fifth'>
                        <Image
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                left: '10%',
                                top: '0',
                                width: '30%',
                                height: '0%'
                            }}
                            src={FifthSlideim1} alt="q" className='img-fluid' />
                        <Image
                            style={{
                                position: 'absolute',
                                left: '10%',
                                top: '40%',
                                width: '30%'
                            }}
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            src={FifthSlideim2} alt="q" className='img-fluid' />
                        <Image
                            style={{
                                position: 'absolute',
                                left: '40%',
                                top: '-50px',
                                width: '30%'
                            }}
                            data-aos="fade-down"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            src={FifthSlideim3} alt="q" className='img-fluid' />
                        <Image
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                left: '40%',
                                top: '58%',
                                width: '30%'
                            }}
                            src={FifthSlideim4} alt="q" className='img-fluid' />
                        <Image
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"

                            style={{
                                position: 'absolute',
                                top: '20%',
                                right: "2%",
                                width: '30%'
                            }}
                            src={FifthSlideim5} alt="q" className='img-fluid' />
                    </div>
                </Page>

                {/* page 6 */}
                <Page className='d-flex' style={{ overflow: 'hidden' }}>
                    <div
                        className='left sixth'
                        style={{
                            width: '45%',
                            height: '100%',
                            background: '#032f94',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                background: '#042d93',
                                borderRadius: '50%',
                                top: '10%',
                                right: '-14%',
                                width: '35%',
                                zIndex: '2'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >

                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="680, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="#0092FF"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#ffffff91"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="1"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                borderRadius: '50%',
                                top: '20%',
                                right: '0',
                                zIndex: '3',
                                textAlign: 'right',
                                color: '#fff',
                            }}
                        >
                            <p style={{
                                textAlign: 'left',
                            }}>Developing ERP solutions for</p>
                            <h1 className='big-font'>Text Headline</h1>
                            <p>in furnituring industry</p>
                        </div>

                        <div
                            style={{
                                display: 'inline-block',
                                borderRadius: '50%',
                                zIndex: '3',
                                color: '#fff',
                                width: '100%',
                            }}
                            className="text-white poa b0 l0 p50">
                            <h1
                                data-aos="fade-right"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                className="pb20 big-font">ABC 5</h1>
                            <p className="pb50">We are the best web <br />development company <br /> of the world</p>
                            <div className="d-flex aic jcb">
                                <Link href='/' className='text-white'
                                >View Case Study --</Link>
                                <Link className='text-white' href='/'>S K I P</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '55%',
                            background: '#d29000',
                            paddingInline: '80px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                        className='right fifth'>
                        <Image
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                width: '100%'
                            }}
                            src={SixSlideim1} alt="q" className='img-fluid' />
                    </div>
                </Page>

                {/* page 7 */}
                <Page className='d-flex' style={{ overflow: 'hidden' }}>
                    <div
                        className='left seventh'
                        style={{
                            width: '45%',
                            height: '100%',
                            background: '#01834c',
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                background: '#01834c',
                                borderRadius: '50%',
                                top: '10%',
                                right: '-14%',
                                width: '35%',
                                zIndex: '2'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 414 414"
                                version="1.1"
                                viewBox="0 0 414 414"
                                xmlSpace="preserve"
                            >

                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrg"
                                    enableBackground="new"
                                    opacity="0.4"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeDasharray="880, 1000"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                    d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
                                    className="transrgwht"
                                ></path>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsst dotsfill1"
                                    ></path>
                                    <path
                                        fill="#0092FF"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                                        className="dotsstro1"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsst dotsfill2"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 0"
                                        className="dotsstro2"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill3"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro3"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsst dotsfill4"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 0"
                                        className="dotsstro4"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill5"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro5"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsst dotsfill6"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 0"
                                        className="dotsstro6"
                                    ></path>
                                </g>
                                <g className="dots-nav">
                                    <path
                                        fill="#0092FF"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsst dotsfill7"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#FFF"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                        d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 0"
                                        className="dotsstro7"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                display: 'inline-block',
                                borderRadius: '50%',
                                top: '20%',
                                right: '0',
                                zIndex: '3',
                                textAlign: 'right',
                                color: '#fff',
                            }}
                        >
                            <p style={{
                                textAlign: 'left',
                            }}>Biggest Classifields</p>
                            <h1 className='big-font'>East Asia</h1>
                            <p>Countries</p>
                        </div>

                        <div
                            style={{
                                borderRadius: '50%',
                                zIndex: '3',
                                color: '#fff',
                                width: '100%',
                            }}
                            className="text-white poa b0 l0 p50">
                            <Image className='pb20' src={sixthSlideim3} alt="q" />
                            <h1
                                data-aos="fade-right"
                                data-aos-delay="50"
                                data-aos-duration="4000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                className="pb20 big-font">ABC 7</h1>
                            <p className="pb50">We are the best web <br />development company <br /> of the world</p>
                            <div className="d-flex aic jcb">
                                <Link href='/' className='text-white'
                                >View Case Study --</Link>
                                <Link className='text-white' href='/'>S K I P</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '55%',
                            background: '#02b86a',
                            paddingInline: '80px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                        className='right seventh'>
                        <Image
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                left: '25%',
                                top: '30%',
                                width: '45%',
                                zIndex: '4'
                            }}
                            src={sixthSlideim1} alt="q" className='img-fluid' />
                        <Image
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            style={{
                                position: 'absolute',
                                left: '56%',
                                top: '25%',
                                width: '35%'
                            }}
                            src={sixthSlideim2} alt="q" className='img-fluid' />

                    </div>
                </Page>

            </PageScroller>
        </div>
    );
};

export default DeskView;


class PageScroller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPos: 0,
            pageIndex: 0,
            scrollAgain: true
        };

        this.pages = 0;
        this.scrollLocker = () => { };
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollPos = this.state.scrollPos;
        let pageIndex = this.state.pageIndex;
        const winHeight = window.innerHeight;

        if (this.state.scrollAgain) {
            if ((document.body.getBoundingClientRect()).top > scrollPos) {
                // handle scroll up
                if (pageIndex - 1 >= 0) {
                    //pageIndex--;
                    this.scroll(winHeight, pageIndex - 1);
                }
            } else {
                // handle scroll down
                if (pageIndex + 1 <= this.pages - 1) {
                    //pageIndex++;
                    this.scroll(winHeight, pageIndex + 1);
                }
            }
        } else {
            // scroll to current position if scrolling is disabled
            window.scrollTo(0, pageIndex * winHeight);
        }
    }

    scroll = (winHeight, pageIndex) => {
        window.scrollTo(0, winHeight * pageIndex);

        this.scrollLocker = setTimeout(() => {
            this.setState({ scrollAgain: true });
        }, 1000);

        this.setState({
            scrollPos: (document.body.getBoundingClientRect()).top,
            pageIndex: pageIndex,
            scrollAgain: false
        });
    }

    goToPage = (index) => {
        this.scroll(window.innerHeight, index);
    }

    renderChildren = () => {
        let childElements = [];
        let pageIndicator = undefined;
        let pageNav = undefined;
        let navButtons = [];
        let pageCount = 0;

        React.Children.map(this.props.children, (child, i) => {

            if (child.type === Page) {

                if (child.props.navTitle) {

                    navButtons.push({
                        title: child.props.navTitle,
                        index: pageCount
                    });
                }

                pageCount++;
                childElements.push(child);
            } else if (child.type === PageIndicator) {
                pageIndicator = child;
            }
        });

        this.pages = pageCount;

        if (pageIndicator) {
            childElements.push(
                React.cloneElement(pageIndicator, {
                    pageCount: this.pages,
                    activePage: this.state.pageIndex,
                    goToPage: this.goToPage
                }));
        }

        if (pageNav) {
            childElements.push(
                React.cloneElement(pageNav, {
                    goToPage: this.goToPage,
                    navButtons: navButtons
                }));
        }

        return childElements;
    }

    render() {
        return (
            <div  {...this.props}>
                {this.renderChildren()}
            </div>
        );
    }
}

function Page(props) {
    let { style, children, ...otherProps } = { ...props };
    let { height, width, ...cleanedStyle } = { ...style };

    let pageStyle = {
        height: '100vh',
        width: '100vw',
        ...cleanedStyle
    }

    return (
        <div style={pageStyle} {...otherProps}>
            {children}
        </div>
    );
}

class PageIndicator extends React.Component {

    renderIndicators = () => {
        let count = this.props.pageCount;
        let indicators = [];

        for (let i = 0; i < count; i++) {
            indicators.push(
                <PageIndicatorButton
                    active={i === this.props.activePage}
                    pageIndex={i}
                    goToPage={this.props.goToPage}
                    key={i}
                />
            );
        }

        return indicators;
    }

    render() {
        let pageIndicatorStyle = {
            ...this.props.style,
            height: '100vh',
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        };

        return (
            <div style={pageIndicatorStyle}>
                {this.renderIndicators()}
            </div>
        );
    }
}

class PageIndicatorButton extends React.Component {
    goToPage = () => {
        this.props.goToPage(this.props.pageIndex);
    }

    render() {
        let indicatorStyle = {
            height: '8px',
            width: this.props.active ? '20px' : '8px',
            margin: '10px',
            borderRadius: '4px',
            backgroundColor: 'white',
            transition: 'width 500ms ease'
        };

        return (
            <div style={indicatorStyle} onClick={this.goToPage}>
            </div>
        );
    }
}