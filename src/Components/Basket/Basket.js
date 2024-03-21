import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Basket() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>I am Basket</h2>
      <button type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  )
}
