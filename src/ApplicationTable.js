import './ApplicationTable.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap'

const ApplicationTable = (props) => {
    const { formData, jrole, handleStatus } = props
    const [user, setUser] = useState({})
    const [show, setShow] = useState(false)

    const showDetail = (id) => {
        const url = `http://dct-application-form.herokuapp.com/users/application-form/${id}`
        axios.get(url)
            .then((res) => {
                setUser(res.data)
                setShow(true)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    const handleClose = () => {
        setShow(false)
    }


    return (
        <div className='table'>
            <h3>{jrole}</h3>
            <caption id='caption'>List of candidates applied for {jrole} role.</caption>
            <table>
                <thead id='thead'>
                    <tr>
                        <th id='th'>Name</th>
                        <th id='th'>Technical Skills</th>
                        <th id='th'>Experience</th>
                        <th id='th'>Applied Date</th>
                        <th id='th'>View Details</th>
                        <th id='th'>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        formData.map((ele, i) => {
                            return (
                                <tr key={i} id='tr'>
                                    <td id='td'>{ele.name}</td>
                                    <td id='td'>{ele.skills}</td>
                                    <td id='td'>{ele.experience}</td>
                                    <td id='td'>{ele.createdAt.slice(0, 10)}</td>
                                    <td id='td'><Button variant="info" onClick={() => showDetail(ele._id)}>View Details</Button></td>
                                    {
                                        ele.status === 'applied' &&
                                        <td id='td'><Button onClick={(e) => handleStatus(e, ele._id)} variant="success" value='shortlisted'>Shortlist</Button> <Button variant="danger" onClick={(e) => handleStatus(e, ele._id)} value='rejected'>Reject</Button></td>
                                    }
                                    {
                                        ele.status === 'shortlisted' && (
                                            <td id='td'><button variant="success" disabled='true'>Shortlisted</button> </td>
                                        )
                                    }
                                    {
                                        ele.status === 'rejected' && (
                                            <td id='td'><button variant="danger" disabled='true'>Rejected</button></td>
                                        )
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{user.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> contact number: {user.phone}</p>
                    <p> email: {user.email}</p>
                    <p> skills: {user.skills}</p>
                    <p> experience: {user.experience}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}
export default ApplicationTable