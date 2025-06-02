import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaLinkedin, FaGithub, FaFileAlt, FaArrowLeft } from 'react-icons/fa';

const JobApply = () => {

    const { id: jobId } = useParams();

    const { user } = UseAuth();

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;
        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            gitHub,
            resume
        }
        axios.post('http://localhost:5000/applications', application)
            .then(res => {
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
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="w-full max-w-lg bg-base-100 shadow-2xl rounded-2xl p-8 border border-base-200">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
                        <FaFileAlt className="text-accent" /> Apply for this Job
                    </h1>
                    <Link to={`/jobs/${jobId}`} className="text-blue-500 flex items-center gap-1 hover:underline text-base">
                        <FaArrowLeft /> Details
                    </Link>
                </div>
                <form onSubmit={handleApplyFormSubmit} className="space-y-5">
                    <div>
                        <label className="label font-semibold flex items-center gap-2">
                            <FaLinkedin className="text-blue-700" /> LinkedIn
                        </label>
                        <input
                            type="text"
                            name="linkedIn"
                            className="input input-bordered w-full"
                            placeholder="Your LinkedIn Profile Link"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold flex items-center gap-2">
                            <FaGithub className="text-gray-800" /> GitHub
                        </label>
                        <input
                            type="text"
                            name="gitHub"
                            className="input input-bordered w-full"
                            placeholder="Your GitHub Profile Link"
                            required
                        />
                    </div>
                    <div>
                        <label className="label font-semibold flex items-center gap-2">
                            <FaFileAlt className="text-accent" /> Resume
                        </label>
                        <input
                            type="text"
                            name="resume"
                            className="input input-bordered w-full"
                            placeholder="Your Resume Link"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-full mt-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;