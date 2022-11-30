import { useState } from "react"


const ApiRouting = () => {
    const [hello, setHello] = useState('')
    const fetchName = async () => {
        if (global.window) {

            const response = await fetch("/api/hello")
            const data = await response.json()
            setHello(data)
        }
    }
    fetchName()
    return (
        <div>
            <h2 className='text-4xl font-extrabold dark:text-gray-900'> Using API Routes </h2>
            <h3 className='text-3xl font-extrabold dark:text-gray-700'> Hey {hello.name} </h3>
        </div>
    )
}

export default ApiRouting