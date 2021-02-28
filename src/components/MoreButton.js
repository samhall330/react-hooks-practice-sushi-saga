import React from "react";

function MoreButton({sushiIndex, setSushiIndex}) {
  
  function handleMoreClick(){
    setSushiIndex(sushiIndex + 4)
  }

  return <button onClick={handleMoreClick}>More sushi!</button>;
}

export default MoreButton;
