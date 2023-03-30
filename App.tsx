import * as React from 'react';
import './style.css';
import './portf.scss';
import text from './portfolio.json'

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
      <div className="bg-light rounded-4">
        <div className="d-flex">
          <div className="pfp rounded-4">
            <div className="circle">

            </div>
          </div>
          <div className="info rounded-4">
            b
            <div className="scroller">
              {text.text}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
}
