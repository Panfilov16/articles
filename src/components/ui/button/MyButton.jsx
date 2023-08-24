import React from 'react'

function MyButton({children, ...props}) {
  return (
 <button {...props} className="my__btn">
      {children}
 </button>
  )
}

export default MyButton;