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

    function deleteNote() {
        console.log('hi');
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
