"use client"
import { useState } from "react";
export default function Home() {
  const [count, setcount] = useState(0)
  return (
    <>
  <h1>{count}</h1>
  <button  onClick={()=>setcount((data)=>data+10)}>plus</button>
  <br />
  <button onClick={()=>setcount((data)=>data-10)}>Minus</button>
  <button></button>
    </>
  );
}
