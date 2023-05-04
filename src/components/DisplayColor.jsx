import React from 'react'

const DisplayColor = (props) => {

    const { currentColor } = props;

  return (
    <div>
        {
        currentColor.map((color, i) => (
            <div key={i} style={{ 
                display: "inline-block",
                margin: "10px",
                height: "50px", 
                width: "50px", 
                backgroundColor: color
                }}>
            </div>
        ))
        }
    </div>
  )
}

export default DisplayColor