import React, {Component} from 'react'; //importing React and Component module to be able to create components, React is the default export, while Component is a named export
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //fontawesome React module which allows us to import the FontAwesomeIcon component
import {faPlus} from '@fortawesome/free-solid-svg-icons'; //importing the plus icon that I want for the button


class Header extends Component { 
    render() {
        return(
            <div className='header row align-items-center  m-0'> {/* align-items-center class will vertically center all items in this row, for some reason the header had 15px margin on both sides leaving whitespace, so I added m-0 to get rid of the margins*/}
                <div className='col-sm-4 text-center'>  
                    <Button onClick={() => this.props.addNote()}><FontAwesomeIcon icon={faPlus}/> Add Note</Button> {/*putting in the FontAwesomeIcon component and the plus icon that I want to use. Passing in the createNewNote() function as a prop from App Component */}
                </div>
                <div className='col-sm-4 text-center'> {/*text-center class centers items inside a div*/}
                    <h1 className='p-4'>
                        React Notes
                    </h1> {/* isn't this p-4 class from reactstrap? I haven't imported it so why is it working? -- I forgot, this doesn't need to be imported. They are classes in bootstrap that I just add to these html elements and they will be styled accordingly*/}
                </div>
                
                
            </div>
        )
    }
}


export default Header; //exporting the Header component as default as we don't have any other components to export in this file.