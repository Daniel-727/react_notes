import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


function AddCardModal(props){

    function handleChange(e){
        const {value, name} = e.target;
        if (name === 'title') {
            props.userInput(prevNote => {
                return({
                    title: value,
                    content: prevNote.content
                });
            });
        } else if (name === 'content') {
            props.userInput(prevNote => {
                return({
                    title: prevNote.title,
                    content: value
                });
            });
        }
    
        /* console.log(props.singleNote); */
    }

    function handleClick(e){
        const {name} = e.target;
        if (name ==='submit') {
            props.createNote();
            props.toggleModal();
        } else if (name === 'cancel'){
            props.toggleModal();
        }
    }

    return(
        <>
        <Modal isOpen={props.modalState} toggle={props.toggleModal}> {/* adding toggle in the Modal allows us to exit the modal by clicking outside of it*/}
            <ModalHeader>Add a Card</ModalHeader>
            <ModalBody>
                <label for='title'>Title:</label><input name='title' id='title' onChange={handleChange}></input>
                <label for='content'>Content:</label><input name='content' id='content' onChange={handleChange}></input>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' name='submit' onClick={handleClick}>Submit</Button>
                <Button color='danger' name='cancel' onClick={handleClick}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </>
    )
    
}


export default AddCardModal;