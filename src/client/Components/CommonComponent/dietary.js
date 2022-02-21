import React from 'react';

const Dietary = (props) => {
  return (
          <p>
            {props.name.map(t=>{
                return <span className="dietary" key={`${Math.random()+t}`}>{t}</span>
            })}
          </p>
);

}

export default Dietary;