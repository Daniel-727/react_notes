import React from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Note from './components/NoteComponent';
import './App.css';
/* import notes from './notes'; //importing notes to use notes array for Keeper App part 2 */

function App() {

    const[notes, setNotes] = React.useState([]); //setting empty array to store notes

    
    return (
        <>
            <Header/>
            <Note title="hi" content="hello"/>
            
            <Footer/> 
        </>
    );
    
}




export default App;
