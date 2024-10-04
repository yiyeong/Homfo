import React, {useEffect} from "react";
import './Homfo.css';

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
                <div className="banner-contents">
                   <p>나를 위한 집,<br />홈포가 찾아드릴게요.</p>
                </div>
                <button className="request">
                    <div className="request-layout">
                    <p>제안서 요청하러 가기 🏃‍♂️‍</p></div>
                </button>
            </section>

            <p className="map-section">
                <h4>구역  바로가기</h4>
            </p>
            <section className="map-contents">
                <p className="map-title">지도 바로가기</p>
                <p className="map-body">지도 또는 목록으로<br />자취구역을 확인해보세요!</p>   
            </section>

            <section>
                <p className="study-section">오늘의 부동산 상식</p>

            </section>

            <section className="menu"></section>
        </div>
    );
};

export default App;