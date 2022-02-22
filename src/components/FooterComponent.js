import React, {Component} from 'react';

let date = new Date(); //creates a new date object
let year = date.getFullYear(); //getting only the year from the date object

class Footer extends Component{
    render() {
        return(
            <div className='footer'>
                <p>Copyright &copy; {year}</p> {/*printing the year along with copyright information*/}
            </div>
        );
    }
}



export default Footer;