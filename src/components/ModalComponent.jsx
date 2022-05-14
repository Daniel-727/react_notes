import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


function AddCardModal(props){

    function handleChange(e){
        const {value, name} = e.target;
        if (name === 'title') {
            props.setNote(prevNote => {
                return({
                    title: value,
                    content: prevNote.content
                });
            });
        } else if (name === 'content') {
            props.setNote(prevNote => {
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
            <ModalHeader>Add a Note</ModalHeader>
            <ModalBody>
                <label htmlFor='title'>Title:</label><input name='title' id='title' onChange={handleChange}></input>
                <label htmlFor='content'>Content:</label><input name='content' id='content' onChange={handleChange}></input>
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