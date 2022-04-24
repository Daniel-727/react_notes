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
        props.deleteNote(props.id);
    }

    
    
    return( 
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className='note' onMouseOver={revealX} onMouseLeave={hideX}> {/*when user is hovering mouse over the Note, then we want the x to be visible so the user can click on it and delete the note if they want. Otherwise, the x should be hidden*/}
                <div className='col'>
                     {/*onChange event listener doesn't work with spans, but it works with inputs*/}
                     <h1>{props.title}</h1>
                     <p>{props.content}</p>
                </div>
                {hover ? <div onClick={handleClick} className='x-mark'><FontAwesomeIcon icon={faXmark} /></div> : <div></div>}
            </div>
        </div> 
    );
}



export default Note;