import React, {Component} from 'react';
import Header from './components/HeaderComponent';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }

        function createNewNote () { //function for what happens when button is clicked
            
        }
    }

    

    render() {
        return (
            <>
              <Header createNewNote={this.state.createNewNote()}/> {/*passing in the createNewNote function to the Header so when the button in the header is clicked, the function here in the App Component is triggered*/}
            </>
          );
    }
}

export default App;
