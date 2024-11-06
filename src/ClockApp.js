import React, { useEffect, useState } from "react";
import "./ClockApp.css";

// ClockForm 컴포넌트: 시계 정보를 입력받는 폼
function ClockForm({ onRegister, clockData = {}, onUpdate, onCancel }) {
    const [clockName, setClockName] = useState(clockData.clockName || "");
    const [hour, setHour] = useState(clockData.hour || "");
    const [minute, setMinute] = useState(clockData.minute || "");
    const [second, setSecond] = useState(clockData.second || "");

    useEffect(() => {
        setClockName(clockData.clockName || "");
        setHour(clockData.hour || "");
        setMinute(clockData.minute || "");
        setSecond(clockData.second || "");
    },[clockData]);

    const handleRegister = () => {
        if (
            clockName &&
            hour >= 0 && hour <= 23 &&
            minute >= 0 && minute <= 59 &&
            second >= 0 && second <= 59
        ) {
            const updatedClock = { clockName, hour, minute, second, is12Hour: false, period: "AM" };
            if (clockData.id) {
                onUpdate(clockData.id, updatedClock); // 시계 수정
            } else {
                onRegister(updatedClock); // 새 시계 추가
            }
            resetForm();
        } else {
            alert("유효하지 않은 시간입니다. 시: 0~23, 분/초: 0~59 사이로 입력하세요.");
        }
    };

    const resetForm = () => {
        setClockName("");
        setHour("");
        setMinute("");
        setSecond("");
        if (onCancel) onCancel();
    };

    return (
        <div className="clock-form">
            <div className="form-field">
                <label>시계 이름</label>
                <input
                    type="text"
                    value={clockName}
                    onChange={(e) => setClockName(e.target.value)}
                />
            </div>

            <div className="form-field">
                <label>시계 초기 시간</label>
                <input
                    type="number"
                    value={hour}
                    onChange={(e) => setHour(Number(e.target.value))}
                />
            </div>

            <div className="form-field">
                <label>시계 초기 분</label>
                <input
                    type="number"
                    value={minute}
                    onChange={(e) => setMinute(Number(e.target.value))}
                />
            </div>

            <div className="form-field">
                <label>시계 초기 초</label>
                <input
                    type="number"
                    value={second}
                    onChange={(e) => setSecond(Number(e.target.value))}
                />
            </div>

            <button onClick={handleRegister}>{clockData.id ? "수정" : "추가"}</button>
            {clockData.id && <button onClick={resetForm}>수정 취소</button>}
        </div>
    );
}

function ClockDisplay({ clocks, onEdit, onChange, onDelete }) {
    return (
        <div className="clock-display">
            <h1>시계 패널</h1>
            {clocks.map((clock, index) => (
                <div key={index} className="clock-box">
                    <h3>{clock.clockName}</h3>
                    <p>
                        {clock.is12Hour ? (
                            <>
                                <label>{clock.period}</label> {String(clock.hour).padStart(2, '0')} : {String(clock.minute).padStart(2, '0')} : {String(clock.second).padStart(2, '0')}
                            </>
                        ) : (
                            <>
                                <label>24h</label> {String(clock.hour).padStart(2, '0')} : {String(clock.minute).padStart(2, '0')} : {String(clock.second).padStart(2, '0')}
                            </>
                        )}
                    </p>
                    <div className="button-group">
                        <button onClick={() => onEdit(clock)}>수정</button>
                        <button onClick={() => onChange(clock.id)}>
                        {clock.is12Hour ? "24시간제로 변환" : "12시간제로 변환"}
                        </button>
                        <button onClick={() => onDelete(index)}>삭제</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

function App() {
    const [clocks, setClocks] = useState([]);
    const [editingClock, setEditingClock] = useState(null);

    const handleRegisterClock = (newClock) => {
        setClocks((prevClocks) => [...prevClocks, { ...newClock, id: Date.now() }]);
    };

    const handleEditClock = (clock) => {
        setEditingClock(clock);
    };

    const handleUpdateClock = (id, updatedClock) => {
        setClocks((prevClocks) =>
            prevClocks.map((clock) => (clock.id === id ? { ...updatedClock, id } : clock))
        );
        setEditingClock(null);
    };  

    const handleToggleClockFormat = (id) => {
        setClocks((prevClocks) => {
            return prevClocks.map((clock) => {
                if (clock.id === id) {
                    const is12Hour = !clock.is12Hour; // 현재 형식의 반대 값
                    let newHour = clock.hour;
                    let newPeriod = clock.period;
                    
                    if (is12Hour) {
                        newHour = clock.hour % 12 === 0 ? 12 : clock.hour % 12; // 12시간제로 변환
                        newPeriod = clock.hour < 12 ? "AM" : "PM"; // AM/PM 설정
                    } else {
                        newHour = clock.hour < 12 ? clock.hour  : clock.hour + 12; // 24시간제로 변환
                        newPeriod = "24h"; // 24시간으로 표시
                    }
                    
                    return { ...clock, hour: newHour, is12Hour, period: newPeriod }; // 상태 업데이트
                }
                return clock;
            });
        });
    };

    const handleDeleteClock = (index) => {
        setClocks((prevClocks) => prevClocks.filter((_, i) => i !== index));
    };

    const adjustTime = (hours, minutes, seconds) => {
        setClocks((prevClocks) =>
            prevClocks.map((clock) => {
                let newHour = clock.hour + hours;
                let newMinute = clock.minute + minutes;
                let newSecond = clock.second + seconds;

                if (newSecond >= 60) {
                    newMinute += Math.floor(newSecond / 60);
                    newSecond %= 60;
                } else if (newSecond < 0) {
                    newMinute += Math.floor(newSecond / 60);
                    newSecond = (newSecond % 60 + 60) % 60;
                }

                if (newMinute >= 60) {
                    newHour += Math.floor(newMinute / 60);
                    newMinute %= 60;
                } else if (newMinute < 0) {
                    newHour += Math.floor(newMinute / 60);
                    newMinute = (newMinute % 60 + 60) % 60;
                }

                newHour = (newHour + 24) % 24;

                return { ...clock, hour: newHour, minute: newMinute, second: newSecond };
            })
        );
    };

    return (
        <div className="app">
            <h1>시계 정보 입력 패널</h1>
            <ClockForm
                onRegister={handleRegisterClock}
                onUpdate={handleUpdateClock}
                onCancel={() => setEditingClock(null)}
                clockData={editingClock || {}}
            />
            <ClockDisplay 
                clocks={clocks} 
                onEdit={handleEditClock} 
                onChange={handleToggleClockFormat}
                onDelete={handleDeleteClock} />

                <div className="adjust-buttons">
                    <h1>시계 조작 패널</h1>
                    <button onClick={() => adjustTime(1, 0, 0)}>1시간 증가</button>
                    <button onClick={() => adjustTime(-1, 0, 0)}>1시간 감소</button>
                    <button onClick={() => adjustTime(0, 10, 0)}>10분 증가</button>
                    <button onClick={() => adjustTime(0, -10, 0)}>10분 감소</button>
                    <button onClick={() => adjustTime(0, 0, 10)}>10초 증가</button>
                    <button onClick={() => adjustTime(0, 0, -10)}>10초 감소</button>
                </div>
        </div>
    );
}

function ClockApp() {
    return <App />;
}

export default ClockApp;
