import React from 'react'

export default function MyButton({children, ...props}) {
  return (
 <button {...props} className="my__btn">
      {children}
 </button>
  )
}
