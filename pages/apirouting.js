import { useState, useEffect } from "react"


const ApiRouting = () => {

    const [hello, setHello] = useState('')

    const fetchName = async () => {
        const response = await fetch("/api/hello")
        const data = await response.json()
        setHello(data)
    }

    fetchName()
    return (
        <div>Hi {hello.name}</div>
    )
}

export default ApiRouting