import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { FaUser, FaEnvelope, FaLink, FaGithub, FaFileAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const statusColors = {
    Pending: 'badge-warning',
    Interview: 'badge-info',
    Hired: 'badge-success',
    Rejected: 'badge-error'
};

const ViewApplications = () => {

    const { job_id } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) => {
        axios.patch(`http://localhost:5000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status Updated Successfully",
                        text: `Status updated to ${e.target.value}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log("Error updating status:", err)
            });
    }

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl border border-base-200 ">
                <h1 className="text-3xl font-extrabold text-primary mb-8">
                    {applications.length} Applications for: <span className="text-accent">{job_id}</span>
                </h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="text-base text-primary">
                                <th>#</th>
                                <th className="flex items-center gap-2"><FaUser /> Applicant</th>
                                <th><FaEnvelope /> Email</th>
                                <th><FaLink /> LinkedIn</th>
                                <th><FaGithub /> GitHub</th>
                                <th><FaFileAlt /> Resume</th>
                                <th>Status</th>
                                <th>Update Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, idx) => (
                                <tr key={application._id} className="hover:bg-base-200 transition">
                                    <td>{idx + 1}</td>
                                    <td className="font-semibold">{application.applicantName || application.applicant}</td>
                                    <td>
                                        <a href={`mailto:${application.applicant}`} className="text-blue-600 hover:underline flex items-center gap-1">
                                            <FaEnvelope /> {application.applicant}
                                        </a>
                                    </td>
                                    <td>
                                        <a href={application.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-1">
                                            <FaLink /> Profile
                                        </a>
                                    </td>
                                    <td>
                                        <a href={application.gitHub} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline flex items-center gap-1">
                                            <FaGithub /> Profile
                                        </a>
                                    </td>
                                    <td>
                                        <a href={application.resume} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                                            <FaFileAlt /> Resume
                                        </a>
                                    </td>
                                    <td>
                                        <span className={`badge ${statusColors[application.status] || 'badge-ghost'} text-base`}>
                                            {application.status}
                                            {application.status === 'Hired' && <FaCheckCircle className="ml-1 text-green-600" />}
                                            {application.status === 'Rejected' && <FaTimesCircle className="ml-1 text-red-600" />}
                                        </span>
                                    </td>
                                    <td>
                                        <select
                                            onChange={e => handleStatusChange(e, application._id)}
                                            defaultValue={application.status}
                                            className="select select-bordered select-sm"
                                        >
                                            <option disabled={true}>Update Status</option>
                                            <option>Pending</option>
                                            <option>Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {applications.length === 0 && (
                        <div className="text-center text-lg text-gray-500 py-10">
                            No applications found for this job.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewApplications;