import React from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Note from './components/NoteComponent';
import './App.css';
/* import notes from './notes'; //importing notes to use notes array for Keeper App part 2 */

function App() {

    const[notes, setNotes] = React.useState([]); //setting empty array to store notes

    function createNote() { //making notes an array makes sense instead of a variable count, because when I want to add the functionality of deleting a specific note, I can do that using the note's index.
        let numOfNotes = notes.length;
        console.log(numOfNotes);
        setNotes([...notes, numOfNotes]);
    }

    function deleteNote(event,id) { //this should return all the Notes where the index is not equal to id, but it's just deleting the last Note. Maybe because I didn't have the event
        console.log(event.timeStamp);
        setNotes(notes => {
            return notes.filter((e,i) => { //this will return an array of notes where the note that is clicked
                return i !== id;
            });
        });
    }
    
    return (
        <>
            <Header addNote={createNote}/>
            {notes.map((e,i) => {
                return <Note key={i} id={i} clickX={deleteNote}/>
            })}
            <Footer/> 
        </>
    );
    
}




export default App;
