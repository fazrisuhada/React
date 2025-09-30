import NoteForm from "./NoteForm"
import { useImmerReducer } from "use-immer"
import NoteList from "./NoteList"
import { NotesContext, NotesDispatchContext } from "./NoteContext"

let id = 0
const initialNotes = [
    {id: 0, text: "Learn HTML", done: true},
    {id: 1, text: "Learn CSS", done: true},
    {id: 2, text: "Learn JS", done: true},
    {id: 3, text: "Learn React", done: false},
]

function noteReducer(draft, action){
    if(action.type === 'ADD_NOTE'){
        const newId = Date.now() + Math.random()
        draft.push({
            id: newId,
            text: action.text,
            done: false
        })
    } else if(action.type === 'CHANGE_NOTE'){
        const index = draft.findIndex(note => note.id === action.id)
        draft[index].text = action.text
        draft[index].done = action.done
    } else if(action.type === 'DELETE_NOTE'){
        const index = draft.findIndex(note => note.id === action.id)
        draft.splice(index, 1)
    }
}

export default function NoteApp() {

    const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes)

    return(
        <div>
            <NotesContext.Provider value={notes} >
                <NotesDispatchContext.Provider value={dispatch} >
                    <h1>Note App</h1>
                    <NoteForm />
                    <NoteList />
                </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    )
}