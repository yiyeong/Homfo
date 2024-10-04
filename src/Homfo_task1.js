import React, { useEffect } from "react";
import "./Homfo_task1.css";

const App = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="app-container">
      <section className="banner-section">
        <img
          src="/clock1.png"
          style={{
            width: "7%",
            height: "4%",
            top: "13%",
            left: "6.5%",
            position: "absolute",
          }}
        ></img>
        <img
          src="/multi.png"
          style={{
            width: "8%",
            height: "4%",
            top: "24.5%",
            left: "-0.1%",
            position: "absolute",
          }}
        ></img>
        <img
          src="/coin1.png"
          style={{
            width: "5.5%",
            height: "2.7%",
            top: "21%",
            left: "5.3%",
            position: "absolute",
          }}
        ></img>
        <img
          src="/coin2.png"
          style={{
            width: "6.5%",
            height: "2%",
            top: "26%",
            left: "7.5%",
            position: "absolute",
          }}
        ></img>
        <img
          src="/coin3.png"
          style={{
            width: "6%",
            height: "3%",
            top: "23.3%",
            left: "33%",
            position: "absolute",
          }}
        ></img>
        <img
          src="/coin4.png"
          style={{
            width: "5%",
            height: "2.5%",
            top: "16%",
            left: "32%",
            position: "absolute",
          }}
        ></img>
        <img
          src="/homfo.png"
          style={{
            width: "19.5%",
            height: "9.5%",
            top: "15%",
            left: "9%",
            position: "absolute",
          }}
        ></img>
        <img
          src="/circle.png"
          style={{
            width: "9%",
            height: "4%",
            top: "19.3%",
            left: "26.5%",
            position: "absolute",
          }}
        ></img>
        <div className="banner-contents">
          <p>
            나를 위한 집,
            <br />
            홈포가 찾아드릴게요.
          </p>
        </div>
        <button className="request">
            <p>요청서 작성하러 가기  🏃‍♂️‍</p>
        </button>
      </section>
      <section className="bottom-section">
        <h4 className="map-title">구역 바로가기 </h4>
        <section className="map-contents">
          <div className="maps">
          <p className="map-section">구역 확인가기 </p>
                    <p className="map-body">
            나에게 딱 맞는
            <br />
            자취구역을 확인해보세요!
          </p></div>
          <div className="map"></div>
        </section>

        <h4 className="study"> 최근 부동산 상식</h4>
        <div className="study-layout">
          <div
            className="study-content"></div>
          <div
            className="study-content"></div>
          <div
            className="study-content"></div>
        </div>
      </section>

      <section className="menu">
        <div className="icon">
            <img className="icon_layout" src="/homfo_icon.png"></img>
            <div className="icon_text"
              style={{color: "#842CFF"}}>홈</div>
        </div>
        <div className="icon">
            <img className="icon_layout" src="/map_icon.png"></img>
            <div className="icon_text" 
              >지도</div>
        </div>
        <div className="icon">
            <img className="icon_layout" src="/request_icon.png"></img>
            <div className="icon_text">요청서함</div>
        </div>
        <div className="icon">
            <img className="icon_layout" src="/mypage_icon.png"></img>
            <div className="icon_text">마이페이지</div>
        </div>
        

      </section> 
    </div>
  );
};

export default App;
