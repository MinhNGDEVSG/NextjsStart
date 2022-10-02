import React from 'react'

export default function Footer() {

  let getTime = () => {
    let date = new Date();
    return date.getFullYear();
  }

  return (
    <div>
      <footer>
        Copyright {getTime()} of Anytalk.Org All Right.
      </footer>
    </div>
  )
}
