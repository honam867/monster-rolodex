import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.components";
export const CartList = (props) => (
  <div className="card-list">
    {props.monster.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);