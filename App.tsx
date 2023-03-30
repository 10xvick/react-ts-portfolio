import * as React from 'react';
import './style.css';
import './portf.scss';
import JsonToText from './components/utility/JsonToText'

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
              <JsonToText/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
}
