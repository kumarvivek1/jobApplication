import React, { useState } from 'react'
import ApplicationForm from './ApplicationForm'
import axios from 'axios'

const AppContainer = (props) => {
    const [toggle, setToggle] = useState(false)

    const submitData = (data) => {
        const url = 'http://dct-application-form.herokuapp.com/users/application-form'
        axios.post(url, data)
            .then((res) => {
                setToggle(true)
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    return (
        <div>
            <h2>Apply for job</h2>
            <ApplicationForm submitData={submitData} toggle={toggle} setToggle={setToggle} />
        </div>
    );
}
export default AppContainer