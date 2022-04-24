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
        title: '',
        content: ''
    }); //setting note to be an object with an empty string property called text

    function createNote() { //now with createNote we want to add an empty note into the notes array
        setNotes([...notes, note]);
    }

    function deleteNote(id) { 
        setNotes(() => {
            return notes.filter((e,i) => {
                return(i !== id);
            })
        })
    }
    
    return (
        <>
            <Header setNote={setNote} createNote={createNote}/>
            <div className='row'>
                {notes.map((e,i) => {
                    return <Note key={i} id={i} deleteNote={deleteNote} setNote={setNote} title={e.title} content={e.content}/>
                })}
            </div>
            <Footer/> 
        </>
    );
    
}




export default App;
