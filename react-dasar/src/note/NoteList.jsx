import { useContext, useMemo, useState } from "react"
import Note from "./Note"
import { NotesContext } from "./NoteContext"
import { useRef } from "react"

export default function NoteList(){
    const notes = useContext(NotesContext)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null)

    const filteredNotes = useMemo(() => {
        return notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))
    }, [notes, search])

    const handleSearch = () => {
        setSearch(searchInput.current.value)
    }

    return(
        <div>
            <div>
                <input type="text" ref={searchInput} onChange={handleSearch} />
                {/* <button onClick={handleSearch}>Search</button> */}
            </div>
            <ul>
                {filteredNotes.map(note =>(
                    <li key={note.id}>
                        <Note note={note} />
                    </li>
                ))}
            </ul>
        </div>
    )
}