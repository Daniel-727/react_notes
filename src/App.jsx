import React, {Component} from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Note from './components/NoteComponent';
import './App.css';
import notes from './notes'; //importing notes to use notes array for Keeper App part 2

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numOfNotes: 0,
            notesArray: []
        } //default notes start at 1, whenever the user clicks, there should be at least 1 note, and 1 element in the notesArray
        
    }

    




    addNote() { //function for what happens when button is clicked, it seems you create methods outside of the constructor, and they also don't need the function keyword. You just need the name of the function.
        this.setState({numOfNotes: this.state.numOfNotes + 1}); {/*everytime the add note button is clicked, we change numOfNotes property in app to increment by 1*/}
        
        /* this.setState({notesArray: this.state.notesArray.push(this.state.numOfNotes)}); */ {/*works for the first button click, but breaks after*/} //I need to figure out why this doesn't work

        this.setState({notesArray: [...this.state.notesArray, this.state.numOfNotes]}); {/*seems like we need to use javascript spread syntax to add a new element into the array. Now we have the array working properly, we can now use map to create multiple notes. Just explaining what this code actually does. So we have this notesArray. everytime the button is clicked, we will get everything from the previous array (...this.state.notesArray), and add one more element to the end of that array (this.state.numofNotes)*/}

        console.log(this.state.numOfNotes);
        console.log(this.state.notesArray);
    }

    

    render() {
        return (
            <>
              <Header addNote={() => this.addNote()}/> {/*passing in the createNewNote function to the Header so when the button in the header is clicked, the function here in the App Component is triggered*/}
              {notes.map(note => { //got rid of the function outside because why create a function if we are only going to use it here? So I made it an anonymous arrow function instead, also key doesn't need to try to grab state from outside the App class anymore. It can just grab the key from the note and there is no React key error
                return <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                    />;
                })
              
            /*SOLVED - it's because the function used by map is by default used on every iteration, so it will by default have access to the element of that iteration, so we don't have to pass in note, because the function createNotes will automaticcaly have it.*/}
              
               
              <Footer/> 
            </>
          );
    }
}




export default App;
