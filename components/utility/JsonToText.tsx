import * as React from 'react';
import p from '../../assets/json/portfolio.json';

const color = '#ffd3ac';
function ObjectToArray(obj, level = 1, fs = 7) {
  const entries = [];
  const style = { fontSize: fs / level + 'vw' };
  if (typeof obj == 'object') {
    if (Array.isArray(obj)) {
      if (obj.some((e) => typeof e == 'object')) {
        entries.push(
          <ul style={{ ...style, paddingLeft: level + 'rem' }}>
            {obj.map((e) => (
              <li style={style}>{ObjectToArray(e, level + 1)}</li>
            ))}
          </ul>
        );
      } else {
        entries.push(<div style={style}>{obj.join(', ')}</div>);
      }
    } else {
      for (let key in obj) {
        const el = obj[key];
        if (key == 'name') {
          entries.push(
            <div className="fw-bolder" style={style}>
              {el}
            </div>
          );
        } else {
          entries.push(
            <div style={{ paddingLeft: level + 'rem' }}>
              <div style={{ ...style, color: '#ffd3ac' }}>{key}</div>
              <div style={style} className="mb-2 fw-light">
                {ObjectToArray(el, level + 1)}
              </div>
            </div>
          );
        }
      }
    }
  } else {
    entries.push(
      <div style={style} className="fw-light">
        {obj}
      </div>
    );
  }
  return entries;
}

const JsonToText = () => {
  return <div>{ObjectToArray(p)}</div>;
};

export default JsonToText;
const ar = null;
console.log(typeof ar);
