import React from 'react'

export default function Button(props) {
  return (
    <div> 
      <button className='btn' onClick={props?.onClick}>
        {props.value}
      </button>
    </div>
  )
}
