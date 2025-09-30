import { useRef, useState } from "react"

export default function Guest() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const nameInput = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        setName("")
        setMessage("")

        alert(`Name : ${name}, Message : ${message}`)

        nameInput.current.focus()
    }
    return(
        <div>
            <div>
                <label htmlFor="name">Name</label> <br/>
                <input ref={nameInput} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="message">Message</label> <br/>
                <textarea name="message" id="" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
            </div>
            <button type="submit" onClick={handleSubmit}>submit</button>
        </div>
    )
}