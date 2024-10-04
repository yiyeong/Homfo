import { useState,  useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=>prev+1);
  const onChange = (event) => setKeyword(event.target.value);
   useEffect(()=>{
    console.log("I run only once.");
  },[]);

  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  /*
  useEffect(() => {
    console.log("CALL THE API.....");
  }, []); 
  빈행렬로 두면 변하는지 봐야하는 data가 없기 때문에 딱 한 번만 실행됨
  
 useEffect(()=>{
    if(keyword !=="" && keyword.length > 5 ){
      console.log("SEARCH FOR", keyword);
    }
  },[keyword]); 
  특정한 값이 변할 때만 코드를 실행하고싶으면 []에 data를적는다.
  [keyword]는 keyword가 변화할 때만 코드가 실행되는거임, counter변화는 실행x
  */

  /*
  const iRunOnlyOnce=()=>{
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []); 
  //useEffectfunction: 코드가 한 번만 실행될 수 있도록 보호해주는 함수
  //component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣는다. 
  */
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
 
/*state를 변경하면 모든 code들이 다시 실행된다. 
component 내부의 몇몇 코드는 처음 딱 한 번만 실행되지 않도록 하고 싶을 수 있다.
 */