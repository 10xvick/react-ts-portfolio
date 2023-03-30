import * as React from 'react';
import p from '../../assets/json/portfolio.json';

function ObjectToArray(obj) {
  const entries = [];
  for (let key in p) {
    const el = obj[key];
    const type = typeof el;
    if (type == 'string' || type == 'number') {
      entries.push(
        <div>
          <div className="fs-1 fw-bold">{key}</div>
          <div className="mb-2">{el}</div>
        </div>
      );
    } else if (Array.isArray(el)) {
      entries.push(<ul>{ObjectToArray(el)}</ul>);
    }
  }
  return entries;
}

const JsonToText = () => {
  return <div>{ObjectToArray(p)}</div>;
};

export default JsonToText;
const ar = null;
console.log(typeof ar);
