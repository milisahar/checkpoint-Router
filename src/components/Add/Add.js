import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { SiAddthis } from 'react-icons/si';



export const Add = ({ movies, setMovies }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");
    const [img, setImg] = useState("");
    const addMovie = () => {
        let newMovie = {
            name: name,
            date: date,
            description: description,
            rating: rate,
            image: img
        }
        setMovies([...movies, newMovie]);
        handleClose()

    }

    return (
        <>
            <SiAddthis onClick={handleShow} className="addbtn" style={{ marginLeft: '95%', height: '40px', }} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your favorite movie </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Enter the name</h6>
                    <input type="text" name="" id="" width="800px" onChange={(e) => setName(e.target.value)} />
                    <h6>Enter the date</h6>
                    <input type="text" name="" id="" width="800px" onChange={(e) => setDate(e.target.value)} />
                    <h6>Enter the description</h6>
                    <input type="text" name="" id="" width="800px" onChange={(e) => setDescription(e.target.value)} />
                    <h6>Enter the rate of the movie</h6>
                    <input type="text" name="" id="" width="800px" onChange={(e) => setRate(e.target.value)} />
                    <h6>Upload the image</h6>
                    <input type="text" name="" id="" width="800px" onChange={(e) => setImg(e.target.value)} />
                    <button type="button" width="300px" style={{ fontStyle: 'revert', color: 'White', backgroundColor: 'blue' }} >Download</button>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
          </Button>
                    <Button variant="primary" onClick={addMovie} >
                        Add
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
