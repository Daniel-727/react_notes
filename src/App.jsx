import React, {Component} from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Note from './components/NoteComponent';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numOfNotes: 0,
            notesArray: []
        } //default notes start at 0, and whenever user clicks on header button to add note, this number will increase

        
    }

    addNote() { //function for what happens when button is clicked, it seems you create methods outside of the constructor, and they also don't need the function keyword. You just need the name of the function.
        this.setState({numOfNotes: this.state.numOfNotes + 1}); {/*everytime the add note button is clicked, we change numOfNotes property in app to increment by 1*/}
        this.setState({notesArray: this.state.notesArray.push(this.state.numOfNotes)}); {/*trying something, we are pushing the number of notes into an array so eventually we can map it to create multiple notes*/}
        console.log(this.state.notesArray);
    }

    /* deleteNotes() {
        this.setState({numOfNotes: this.state.numOfNotes - 1});
    } */
    

    render() {
        return (
            <>
              <Header addNote={() => this.addNote()}/> {/*passing in the createNewNote function to the Header so when the button in the header is clicked, the function here in the App Component is triggered*/}
              <Note/>
              
               
              <Footer/> 
            </>
          );
    }
}

/* function ReturnArrayOfNotes() { //trying to return multiple note components depending on the number of notes stores in the state but obviously I'm doing something wrong
    const arrayNotes = this.state.notesArray.map(number => { //for every number in the array, return a note
        return <Note/>
    });
} */


export default App;
