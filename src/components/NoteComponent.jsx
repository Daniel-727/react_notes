import React, {} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

function Note(props){

    const [hover, setHover] = React.useState(false);

    function revealX(){
        setHover(true);
    }

    function hideX(){
        setHover(false);
    }

    function handleClick(){
        /* console.log('hi'); */
        props.clickX(props.id); // this is the deleteNote() function passed in from the App component
    }

    function handleChange(e){
        console.log('hi');
        props.userInput({text: e.target.value}
        );
    }
    
    return( 
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className='note' onMouseOver={revealX} onMouseLeave={hideX}> {/*when user is hovering mouse over the Note, then we want the x to be visible so the user can click on it and delete the note if they want. Otherwise, the x should be hidden*/}
                <div className='col'>
                    <input name='title' onChange={handleChange}></input>
                    <input name='content' onChange={handleChange}></input> {/*onChange event listener doesn't work with spans, but it works with inputs*/}
                </div>
                {hover ? <div onClick={handleClick} className='xMark'><FontAwesomeIcon icon={faXmark} /></div> : <div></div>}
            </div>
        </div> 
    );
}



export default Note;