import { useState } from "react";
import "./SingleCard.css";
export default function SingleCard({ id, title, thumbnail, card }) {
  console.log(id, card);
  const [state,setcurrentState]=useState(false)
  return (<div>
    <div className="card">
      <div class="container" onClick={()=>setcurrentState(true)}>
        <img
          src={thumbnail.small}
          alt="Avatar"
          class="image"
          style={{ width: "100%" }}
        ></img>
        <div class="middle">
          <div class="text">Learn More</div>
        </div>
      </div>
      <h1>{title}</h1>
      <div className="container">
        <p>{card.content}</p>
      </div>
    </div>
    {   
        state && <div className="Modal">
            <p class="close"onClick={()=>setcurrentState(false)}>X</p>
            <div className="inner">
      <div >
        <img
          src={thumbnail.large}
          alt="Avatar"
        ></img>
      </div>
      <h1>{title}</h1>
      <div>
        <p>{card.content}</p>
      </div>
        <div className="foot">
      <p>{card.author.name}-{card.author.role}</p></div>
    </div>
            </div>

    }

    </div>
  );
}
