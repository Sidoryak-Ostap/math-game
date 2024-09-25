import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function StartPage(props) {
  const [buttonState, SetButtonState] = useState(false);
  const [operands, SetOperand] = useState([]);

  const isDisabled = operands.length === 0;

  useEffect(() => {
    props.GetData(operands);
  }, [operands]);

  useEffect(() => {
    if (operands.length === 0) {
      SetButtonState(false);
    } else {
      SetButtonState(true);
    }
  }, [operands]);

  const add_to_Array = (el) => {
    if (operands.includes(el.target.innerText)) {
      const newOperands = operands.filter((op) => op !== el.target.innerText);
      SetOperand(newOperands);
      el.target.style.background = "transparent";
    } else {
      let new_operand = el.target.innerText;
      SetOperand([...operands, new_operand]);
      el.target.style.background = "#1976d2";
    }
  };

  return (
    <div className="start_page">
      <div className="start_page_holder">
        <div onClick={add_to_Array} className="start_page_operand">
          +
        </div>
        <div onClick={add_to_Array} className="start_page_operand">
          -
        </div>
        <div onClick={add_to_Array} className="start_page_operand">
          x
        </div>
        <div onClick={add_to_Array} className="start_page_operand">
          /
        </div>
      </div>

      {isDisabled || (
        <NavLink
          to="/game"
          className={
            buttonState ? "start_page_button active" : "start_page_button"
          }
        >
          Start Game
        </NavLink>
      )}
    </div>
  );
}

export default StartPage;
