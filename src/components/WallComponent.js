import { faWallet } from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';
import {Card ,Button, CardTitle, CardText} from 'reactstrap';

class Wall extends Component{ //I think I'll have the Wall Component store the state for the notes
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }

    createNote() {
        this.setState({notes: this.state.notes.push({name: 'goober'})});
    }


    render(){
        return(
            <>
            
            </>
        );
    }
}


if(this.props.numOfNotes){
    
}


export default Wall;