import React,{useEffect, useState} from "react";
import './Homfo_task2.css';

function App(){
    const [isMemberSubMenuOpen, setIsMemberSubMenuOpen] = useState(false);
    const [isRequestSubMenuOpen, setIsRequestSubMenuOpen] = useState(false);

    const toggleMemberSubMenu = () => {
        setIsMemberSubMenuOpen(!isMemberSubMenuOpen);
    };

    const toggleRequestSubMenu = () => {
        setIsRequestSubMenuOpen(!isRequestSubMenuOpen);
    };

    return(
        <div className="app-container">
            <section className="logo-section">
                    <img src="/homfo_logo.png" className="logo"></img>
            </section>

            <section className="menu-section">
                <div className="menu-contents">
                    <img src="/members.png" className="sideicon"></img>
                    <p>회원관리</p>
                    <div className="toggle-button" onClick={toggleMemberSubMenu}>
                        {isMemberSubMenuOpen ? <img src="/Vector 28.png" ></img> :<img src="/Vector 30.png" ></img>
                        }
                    </div>
                </div>
                {isMemberSubMenuOpen && (
                    <ul className="submenu">
                        <div 
                            className="sub"
                            onClick={()=>window.location.href='https://www.figma.com/design/X5smPV6koiJS3BcCNBtbkN/Homfo-Design?t=ZQLVg6k2YvAHyhf5-0'}

                            >사용자 정보 조회</div>

                        <div 
                            className="sub"
                            onClick={()=>window.location.href='https://www.youtube.com/'}

                            >관리자 정보 조회</div>
                        
                    </ul>
                )}

                <div className="menu-contents">
                    <img src="/request.png" className="sideicon"></img>
                    <p>요청하기 관리</p>
                    <div className="toggle-button" onClick={toggleRequestSubMenu}>
                        {isRequestSubMenuOpen ?  <img src="/Vector 28.png" ></img> :<img src="/Vector 30.png" ></img>}
                    </div>
                </div>
                {isRequestSubMenuOpen && (
                    <ul className="submenu">
                        <div className="sub">협력 공인중개사 정보 등록</div>
                        <div className="sub">협력 공인중개사 목록</div>
                        <div className="sub">요청서 확인 / 제안서 작성</div>                        
                    </ul>
                )}

                <div className="menu-contents">
                    <img src="/community.png" className="sideicon"></img>
                    <p>커뮤니티</p>
                </div>

                <div className="menu-contents">
                    <img src="/FAQ.png" className="sideicon"></img>
                    <p>FAQ</p>
                </div>

                <div className="menu-contents">
                    <img src="/mypage.png" className="sideicon"></img>
                    <p>마이페이지</p>
                </div>
                
            </section>

            <section className="logout-section">
                <div className="logout">로그아웃</div>
            </section>

        </div>
    );
}

export default App;