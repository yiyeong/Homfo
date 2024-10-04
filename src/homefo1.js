import React,{useEffect} from "react";
import './homefo_task1.css';

const App = () => {
        useEffect(()=>{
            const link = document.createElement("link");
            link.href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css";
            link.rel="stylesheet";
            link.type="text/css";
            document.head.appendChild(link);
    
            return () => {
                document.head.removeChild(link);
            };
        },[]);
    
        return(
            <div className="app-container">
                <section className="banner-section">
                    <img src="/clock1.png"
                            style={{width: "28.64px", 
                            height: "27.42px", 
                            top: "114px",
                            left: "29.21px",
                            position: "absolute"}}></img>
                    <img src="/multi.png"
                            style={{width: "34.62px", 
                            height: "31.41px", 
                            top: "201.61px",
                            left: "-2px",
                            position: "absolute"}}></img>
                    <img src="/coin1.png"
                            style={{width: "19.72px", 
                            height: "18.12px", 
                            top: "157.7px",
                            left: "17.13px",
                            position: "absolute"}}></img>
                    <img src="/coin2.png"
                            style={{width: "23.51px", 
                            height: "16.69px", 
                            top: "185.21px",
                            left: "28.55px",
                            position: "absolute"}}></img>
                    <img src="/coin3.png"
                            style={{width: "24.55px", 
                            height: "22.35px", 
                            top: "204.47px",
                            left: "132.45px",
                            position: "absolute"}}></img>
                    <img src="/coin4.png"
                            style={{width: "22.54px", 
                            height: "19.41px", 
                            top: "142.85px",
                            left: "128.19px",
                            position: "absolute"}}></img>
                    <img src="/homfo.png"
                            style={{width: "75.16px", 
                            height: "77.35px", 
                            top: "139.89px",
                            left: "44.01px",
                            position: "absolute"}}></img>
                    <img src="/circle.png"
                            style={{width: "30.11px", 
                            height: "30.61px", 
                            top: "173.16px",
                            left: "108.99px",
                            position: "absolute"}}></img>
                    <div className="banner-contents">
                    <p>나를 위한 집,<br />홈포가 찾아드릴게요.</p>
                    </div>
                    <button className="request">
                        <div className="request-layout">
                        <p>요청서 작성하러 가기 🏃‍♂️‍</p></div>
                    </button>
                   
                </section>

                <section className="bottom-section">
                    <section className="map-section">
                        구역  바로가기 
                        <section className="map-contents">
                            <p className="map-title">구역 확인가기 </p>
                            <img src="/arrow.png"
                                    style={{width: "9px", 
                                    height: "12px", 
                                    top: "35px",
                                    left: "144px",
                                    position: "absolute"}}></img>
                            <p className="map-body">나에게 딱 맞는<br />자취구역을 확인해보세요!</p>   
                            <div className="map"></div>
                        </section>
                    </section>
                    <h4 className="study"> 최근 부동산 상식</h4>
                    <div 
                        className="study-content"
                        style={{top: "546px", left: "18px"}}
                    ></div>
                    <div 
                        className="study-content"
                        style={{top: "546px", left: "189px"}}
                    ></div>
                    <div 
                        className="study-content"
                        style={{top: "546px", left: "360px"}}
                    ></div>

                    <section className="menu">
                        <div 
                            className="icon"
                            style={{width: "30px", top: "11px", left: "22px"}}
                        >
                            <img src = "/homfo_icon.png"
                                style={{width: "30px", height: "30px"}}></img>
                            <div 
                                className="icon-text"
                                style={{width: "11px", left: "9px", fontWeight: "600", color: "#842CFF"}}
                            >홈</div>
                        </div>

                        <div 
                            className="icon"
                            style={{width: "30px", top: "11px", left: "117px"}}
                        >
                            <img src = "/map_icon.png"
                                style={{width: "30px", height: "30px"}}></img>
                            <div 
                                className="icon-text"
                                style={{width: "21px", left: "4px", fontWeight: "500", color: "#707070"}}
                            >지도</div>
                        </div>

                        <div 
                            className="icon"
                            style={{width: "42px", marginTop: "11px", marginLeft: "212px"}}
                        >
                            <img src = "/request_icon.png"
                                style={{width: "30px", height: "30px", marginLeft:"6px"}}></img>
                            <div 
                                className="icon-text"
                                style={{width: "42px", left: "0", fontWeight: "500", color: "#707070"}}
                            >요청서함</div>
                        </div>

                        <div 
                            className="icon"
                            style={{width: "52px", marginTop: "11px", marginLeft: "319px"}}
                        >
                            <img src = "/mypage_icon.png"
                                style={{width: "30px", height: "30px", marginTop:"4px", marginLeft:"11px"}}></img>
                            <div 
                                className="icon-text"
                                style={{width: "52px", left: "0", fontWeight: "500", color: "#707070"}}
                            >마이페이지</div>
                        </div>
                    </section>
                </section>
            </div>
        );
    };

export default App;