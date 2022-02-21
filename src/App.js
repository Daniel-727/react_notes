import React, {Component} from 'react';
import Header from './components/HeaderComponent';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }

        
    }

    createNewNote() { //function for what happens when button is clicked, it seems you create methods outside of the constructor, and they also don't need the function keyword. You just need the name of the function.
        console.log('hi');
    }
    

    render() {
        return (
            <>
              <Header createNewNote={() => this.createNewNote()}/> {/*passing in the createNewNote function to the Header so when the button in the header is clicked, the function here in the App Component is triggered*/}
            </>
          );
    }
}

export default App;
