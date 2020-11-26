import React, { useState } from 'react'
import './form.css'
import { Button, Form, Row, Col } from 'react-bootstrap'

const ApplicationForm = (props) => {
    const { submitData, toggle, setToggle } = props
    const jobRole = ['Front-End Developer', 'Node.js Developer', 'MEAN Stack Developer', 'FULL Stack Developer']
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [jobrole, setJobrole] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleContact = (e) => {
        setContact(e.target.value)
    }
    const handleRole = (e) => {
        setJobrole(e.target.value)
    }
    const handleExp = (e) => {
        setExperience(e.target.value)
    }
    const handleSkills = (e) => {
        setSkills(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            "name": name,
            "email": email,
            "phone": contact,
            "skills": skills,
            "jobTitle": jobrole,
            "experience": experience,
        }
        submitData(formData)
        if (toggle) {
            setName('')
            setEmail('')
            setContact('')
            setJobrole('')
            setExperience('')
            setSkills('')
            setToggle(false)
        }
    }

    return (
        <div className='form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Full Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Name" value={name} onChange={handleName} required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" value={email} onChange={handleEmail} placeholder='example@gmail.com' required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                        Phone
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" value={contact} onChange={handleContact} placeholder='+91 9407276288' required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalJobRole">
                    <Form.Label column sm={2}>
                        Job role
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            custom
                            value={jobrole}
                            onChange={handleRole}
                            required
                        >
                            <option value="0">---select---</option>
                            {
                                jobRole.map((role, i) => {
                                    return (
                                        <option key={i} value={role}>{role}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalExperience">
                    <Form.Label column sm={2}>
                        Experience
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" value={experience} onChange={handleExp} placeholder='2 years' required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalSkills">
                    <Form.Label column sm={2}>
                        Technical Skills
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" rows={3} value={skills} onChange={handleSkills} placeholder='java,SQL....' />
                    </Col>
                </Form.Group>

                <Button type='submit' as="input" value='send Application' /><br />
            </Form>
        </div>
    );
}
export default ApplicationForm
