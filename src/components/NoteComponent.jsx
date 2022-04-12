import React, {} from 'react';

function Note(props){
    
    return( //adding &nbsp; into the span content just to set a default height, though if use deletes it, it the note will look ugly again
        <div className='col'>
            <div className='note'>
                <span contentEditable='true'></span>
            </div>
        </div>
            
    );
}



export default Note;