import Note from "./Note"

export default function NoteList({notes,onChange,onDelete}){
    return(
        <ul>
            {notes.map(note =>(
                <li>
                    <Note note={note} onChange={onChange} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}