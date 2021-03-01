import React, {useState} from "react";

function Sushi({
  sushis, 
  setSushis, 
  id, 
  name, 
  image, 
  price, 
  acctBalance, 
  setAcctBalance,
  handleEatSushi}) {

  const [eaten, setEaten] = useState(false)   

  function onEatSushi(){
      if (!eaten && price <= acctBalance) {
        setEaten(true);
        handleEatSushi();
        setAcctBalance(acctBalance - price)}

  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
