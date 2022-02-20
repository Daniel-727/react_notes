import React, {Component} from 'react'; //importing React and Component module to be able to create components, React is the default export, while Component is a named export
import {Button} from 'reactstrap';


class Header extends Component { 
    render() {
        return(
            <> 
                <h1 className='p-4'>
                    <Button>+</Button>
                    React Notes
                </h1> {/* isn't this p-4 class from reactstrap? I haven't imported it so why is it working?*/}
            </>
        )
    }
}


export default Header; //exporting the Header component as default as we don't have any other components to export in this file.