import { useState, useEffect } from "react";

function Hello(){
  // function byFn(){
  //   console.log("bye :(");
  // }
  // function hiFn(){
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hiFn,[]);
  useEffect(()=>{
    console.log("created :)");
    return () => console.log("destroyed :(");
  },[]);

  // useEffect(function(){
  //   console.log("created :)");
  //   return function() {
  //     console.log("destroyed :(");
  //   };
  // },[]);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
