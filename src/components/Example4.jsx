import React, { useState } from "react"

const ToUpperCase = () => {

  const [inputValue, setInputValue] = useState("")

  const inputChange = (e) => {
    setInputValue(e.target.value)
  }
  const buutonClick = () => {
    const mecText = inputValue.toUpperCase()
    setInputValue(mecText)
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={inputChange}
      />
      <button onClick={buutonClick}>clicme</button>
      <p>{inputValue}</p>
      <span>Texti amboxj yerkarutyuny klini {inputValue.length} tar </span>
    </div>
  )
}
export default ToUpperCase;