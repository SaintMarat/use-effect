import React, { useState, useEffect } from "react"

const FormData = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    useEffect(() => {

    }, [])

    return (
        <div>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button >clik me</button>
            <p>Barev dzez im anunn e  {firstName}, im azganunn e {lastName}, ev es {age} tarekan em</p>
        </div>
    )
}
export default FormData;