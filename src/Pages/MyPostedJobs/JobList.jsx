import React, { use } from 'react';
import { Link } from 'react-router';
import { FaEye, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

const JobList = ({ jobsCreatedByPromise }) => {

    const jobs = use(jobsCreatedByPromise);

    return (
        <div className="min-h-screen  py-10">
            <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl border border-base-200 p-8">
                <h1 className="text-3xl font-extrabold text-primary mb-8 flex items-center gap-2">
                    <FaBriefcase className="text-accent" /> Jobs created by you: <span className="ml-2">{jobs.length}</span>
                </h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr className="text-base text-primary">
                                <th>#</th>
                                <th>Job Title</th>
                                <th><FaCalendarAlt className="inline mr-1" /> Deadline</th>
                                <th><FaEye className="inline mr-1" /> Applications</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job._id} className="hover:bg-base-200 transition">
                                    <th>{index + 1}</th>
                                    <td className="font-semibold">{job.title}</td>
                                    <td>{job.deadline}</td>
                                    <td>
                                        <Link
                                            to={`/applications/${job._id}`}
                                            className="btn btn-outline btn-accent btn-sm flex items-center gap-1 transition-transform hover:scale-105"
                                        >
                                            <FaEye /> View Applications
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {jobs.length === 0 && (
                        <div className="text-center text-lg text-gray-500 py-10">
                            You haven't posted any jobs yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobList;