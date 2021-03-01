import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, setSushis, acctBalance, setAcctBalance, handleEatSushi}) {

  const [sushiIndex, setSushiIndex] = useState(0)
// console.log(sushis)
  const sushiDisplay = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => {
    return(
    < Sushi 
      key={sushi.id}
      id={sushi.id}
      name={sushi.name}
      image={sushi.img_url}
      price={sushi.price}
      acctBalance={acctBalance} 
      setAcctBalance={setAcctBalance}
      handleEatSushi={handleEatSushi}
    />
    )
  })

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton sushiIndex={sushiIndex} setSushiIndex={setSushiIndex}/>
    </div>
  );
}

export default SushiContainer;
