import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { id: jobId } = useParams();
    console.log(jobId);

    const { user } = UseAuth();
    console.log(jobId, user);

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;
        console.log(linkedIn, gitHub, resume);
        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            gitHub,
            resume
        }
        axios.post('http://localhost:5000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application submitted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='text-center my-5 md:my-15'>
            <h1 className='text-2xl my-5'>Apply for this Job: <Link className='text-blue-500' to={`/jobs/${jobId}`}>Details</Link></h1>
            <form onSubmit={handleApplyFormSubmit}>
                <label className="label">LinkedIn</label><br />
                <input type="text" name='linkedIn' className="input" placeholder="Your LinkedIn Link" /><br /><br />

                <label className="label">GitHub</label><br />
                <input type="text" name='gitHub' className="input" placeholder="Your GitHub Link" /><br /><br />

                <label className="label">Resume</label><br />
                <input type="text" name='resume' className="input" placeholder="Your Resume Link" /><br /><br />

                <input type="submit" className='btn' value="Submit" />
            </form>
        </div>
    );
};

export default JobApply;