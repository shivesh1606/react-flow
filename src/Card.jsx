import React from 'react';

import CustomHandle from "./CustomHandle";
import{

    Position
  } from 'reactflow';
function Card({ type, Name }) {
  return (
    <div className={`label ${type}`} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
    {/* <CustomHandle type="target" position={type=='Destination' ? Position.Left : Position.Right}/> */}
      {type === 'Destination' && <span className='arrow leftArrow' style={{ marginRight: '10px' }}>←</span>}
      {type === 'Source' && <span className="arrow rightArrow" style={{ marginLeft: '10px' }}>→</span>}
      <div style={{
        width: '100%',
      }}> 
        <p>{Name}</p>
        <p style={{ textAlign: type=='Destination' ? 'left' : 'right' }}>{type}</p>
      </div>

    </div>
  );
}

export default Card;
