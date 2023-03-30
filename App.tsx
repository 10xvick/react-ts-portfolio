import * as React from 'react';
import './style.css';
import './portf.scss';
import p from './portfolio.json'

export default function App() {
  return (
    <div> 
      <Portfolio/>
    </div>
  );
}

const Portfolio = ()=>{
  return <div>
    <div className="full">
      <div className="rounded-4">
        <div className="">
          <div className="pfp rounded-4 d-flex">
            <div className="circle"></div>
          </div>
          <div className="info rounded-4">
            <div className="scroller">
              {p.skills.join(', ')}
              {Array(1).fill(p.projects.at(-1)).map(({name,description})=><div>
                <div className='fw-bold'>{name}</div>
                <div>{description}</div>
              </div>)}
              
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
}
