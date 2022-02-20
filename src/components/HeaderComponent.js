import React, {Component} from 'react'; //importing React and Component module to be able to create components, React is the default export, while Component is a named export
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; //fontawesome React module which allows us to import the FontAwesomeIcon component
import {faPlus} from '@fortawesome/free-solid-svg-icons'; //importing the plus icon that I want for the button


class Header extends Component { 
    render() {
        return(
            <div className='header row align-items-center'> {/* align-items-center class will vertically center all items in this row*/}
                <div className='col-4'>  
                    <Button className=''><FontAwesomeIcon icon={faPlus}/> Add Note</Button> {/*putting in the FontAwesomeIcon component and the plus icon that I want to use */}
                </div>
                <div className='col-4'>
                    <h1 className='p-4'>
                        React Notes
                    </h1> {/* isn't this p-4 class from reactstrap? I haven't imported it so why is it working?*/}
                </div>
                <div className='col-4'>

                </div>
                
                
            </div>
        )
    }
}


export default Header; //exporting the Header component as default as we don't have any other components to export in this file.