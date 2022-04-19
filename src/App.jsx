import React from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Note from './components/NoteComponent';
import './App.css';
/* import notes from './notes'; //importing notes to use notes array for Keeper App part 2 */

function App() {

    const[notes, setNotes] = React.useState([]); //setting empty array to store notes

    //note should only have 1 property which is the user input, we're going to call it text
    const[note, setNote] = React.useState({
        text: ''
    }); //setting note to be an object with an empty string property called text

    function createNote() { //now with createNote we want to add an empty note into the notes array
        setNotes([...notes, note]);
    }

    function deleteNote(id) { //this should return all the Notes where the index is not equal to id, but it's just deleting the last Note. Maybe because I didn't have the event
        //I think the deleteNote function isn't working as intended because the notes array is literally an array of integers, when we filter an index and delete an index, it's holding just an integer which is not reflective of the note object we're trying to delete. So the solution to this is probably to create an object and actually store the object in notes instead of some integers. The notes object will by default just have empty strings in which the user can then type into.

        setNotes(notes => {
            return notes.filter((e,i) => { //this will return an array of notes where the note that is clicked
                return id !== i;
            });
        });
    }
    
    return (
        <>
            <Header addNote={createNote}/>
            <div className='row'>
                {notes.map((e,i) => {
                    return <Note key={i} id={i} clickX={deleteNote} userInput={setNote}/>
                })}
            </div>
            <Footer/> 
        </>
    );
    
}




export default App;
