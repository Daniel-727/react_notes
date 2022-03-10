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
              {this.state.notesArray.map(createNotes)} {}
              
               
              <Footer/> 
            </>
          );
    }
}


function createNotes() { //apparently we can't read the state from out here. so adding a key isn't working, but creating multiple notes works.
    return <Note
        /* key={this.state.numOfNotes} */
        />;
}

export default App;
