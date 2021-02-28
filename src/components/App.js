import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])

  const [acctBalance, setAcctBalance] = useState(100)

  useEffect (() => {
    fetch(`${API}`)
    .then(r => r.json())
    .then(sushisData => setSushis(sushisData))
  }, [])


  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis} 
      setSushis={setSushis} 
      acctBalance={acctBalance} 
      setAcctBalance={setAcctBalance}/>
      <Table acctBalance={acctBalance}/>
    </div>
  );
}

export default App;
