import React from 'react';
import "./MyInput";

function MyInput(props){
  return (
    <input className='MyInput' {...props} autoComplete='off'/>
  )
}
export default MyInput;
