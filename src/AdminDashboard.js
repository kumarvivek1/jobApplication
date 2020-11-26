import React, { useState } from 'react'
import axios from 'axios'
import ApplicationTable from './ApplicationTable'
import './ApplicationTable.css'
import Button from 'react-bootstrap/Button'

const AdminDashboard = () => {
    const [formData, setFormData] = useState([])
    const [jrole, setJrole] = useState('')

    const handleSearch = (e) => {
        const k = e.target.value
        setJrole(k)
        const url = 'http://dct-application-form.herokuapp.com/users/application-forms'
        axios.get(url)
            .then((res) => {
                const tableinfo = res.data.filter(ele => {
                    return ele.jobTitle === k
                })
                setFormData(tableinfo)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const handleStatus = (e, id) => {
        const stat = e.target.value
        const url = `http://dct-application-form.herokuapp.com/users/application-form/update/${id}`
        axios.put(url, { status: stat })
            .then((res) => {
                const updatedElement = res.data
                const updatedRecord = formData.map(ele => {
                    if (ele._id === id) {
                        return { ...ele, ...updatedElement }
                    } else {
                        return { ...ele }
                    }
                })
                setFormData(updatedRecord)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <div>
            <div>
                <h2>Admin Dashboard</h2>
                <Button variant="outline-primary" onClick={handleSearch} value='Front-End Developer'>Front-End Developer</Button>
                <Button variant="outline-primary" onClick={handleSearch} value='Node.js Developer'>Node.js Developer</Button>
                <Button variant="outline-primary" onClick={handleSearch} value='MEAN Stack Developer'>MEAN Stack Developer</Button>
                <Button variant="outline-primary" onClick={handleSearch} value='FULL Stack Developer'>FULL Stack Developer</Button>
            </div>
            {formData.length > 0 && <div>
                <ApplicationTable formData={formData} jrole={jrole} handleStatus={handleStatus} />
            </div>}
        </div>
    )
}
export default AdminDashboard