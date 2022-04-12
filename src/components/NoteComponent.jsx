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
    
    return( 
        <div className='col'>
            <div className='note' onMouseOver={revealX} onMouseOut={hideX}> {/*when user is hovering mouse over the Note, then we want the x to be visible so the user can click on it and delete the note if they want. Otherwise, the x should be hidden*/}
                <span contentEditable='true'></span>
                {hover ? <div onClick={() => props.clickX} className='xMark'><FontAwesomeIcon onClick={props.clickX} icon={faXmark} /></div> : <div></div>}
            </div>
        </div> 
    );
}



export default Note;