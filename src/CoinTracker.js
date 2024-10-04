import {useEffect, useState} from "react";

function App(){
    const [loading, setLoding] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoding(false);
        });
    },[]);
    return (
        <div>
            <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
            {loading ? (<strong>Loading...</strong>) : (
                <select>
                {coins.map((coin)=> (
                    <option>
                        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD 
                    </option>))}
            </select>)} 
        </div>
    );
}

export default App;

/* 
<strong></strong> : 굵은 텍슽트로 표현
coin은 coins array 안에 있는 각각의 coin을 의미한다.
*/
