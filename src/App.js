import React, {Component} from 'react';
import Header from './components/HeaderComponent';
import Wall from './components/WallComponent';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numOfNotes: 0
        } //default notes start at 0, and whenever user clicks on header button to add note, this number will increase

        
    }

    addNote() { //function for what happens when button is clicked, it seems you create methods outside of the constructor, and they also don't need the function keyword. You just need the name of the function.
        this.setState({numOfNotes: this.state.numOfNotes + 1}); {/*everytime the add note button is clicked, we change numOfNotes property in app to increment by 1*/}
        //console.log(this.state.numOfNotes);
    }

    /* deleteNotes() {
        this.setState({numOfNotes: this.state.numOfNotes - 1});
    } */
    

    render() {
        return (
            <>
              <Header addNote={() => this.addNote()}/> {/*passing in the createNewNote function to the Header so when the button in the header is clicked, the function here in the App Component is triggered*/}
              <Wall numOfNotes={this.state.numOfNotes}/> {/* passing in the numOfNotes property to Wall so Wall can update how many notes there are*/}
            </>
          );
    }
}

export default App;
