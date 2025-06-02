import React from 'react';
import { Link, useLoaderData } from 'react-router';
import {
    FaEnvelope,
    FaUserTie,
    FaBuilding,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaBriefcase,
    FaCheckCircle,
    FaCalendarAlt,
} from 'react-icons/fa';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    console.log(jobDetails);

    const {
        _id,
        applicationDeadline,
        company_logo,
        category,
        company,
        description,
        hr_email,
        hr_name,
        jobType,
        location,
        status,
        title,
        salaryRange,
        requirements,
        responsibilities,
    } = jobDetails;

    return (
        <div className="max-w-5xl mx-auto p-6 bg-base-100 shadow-md rounded-xl border my-5 md:my-15">
            <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Logo */}
                <div className="bg-base-200 p-4 rounded-lg">
                    <img src={company_logo} alt="Company Logo" className="w-32 h-32 object-contain rounded shadow" />
                </div>

                {/* Job Info */}
                <div className="flex-1 space-y-3">
                    <h1 className="text-3xl font-bold ">{title}</h1>
                    <p className="text-lg  flex items-center gap-2">
                        <FaUserTie className="text-primary" />Hr Name: {hr_name}
                    </p>
                    <p className="text-sm  flex items-center gap-2">
                        <FaEnvelope className="text-primary" />Hr Email: {hr_email}
                    </p>
                    <p className="text-sm  flex items-center gap-2">
                        <FaBuilding className="text-primary" />Company: {company}
                    </p>
                    <p className="text-sm  flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" /> Deadline: {applicationDeadline}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        <span className="badge badge-outline flex items-center gap-1">
                            <FaBriefcase className="text-primary" />Job Type: {jobType}
                        </span>
                        <span className="badge badge-outline flex items-center gap-1">
                            <FaMapMarkerAlt className="text-primary" />Location: {location}
                        </span>
                        <span className="badge badge-outline flex items-center gap-1">
                            <FaCheckCircle className="text-primary" />Status: {status}
                        </span>
                        <span className="badge badge-outline flex items-center gap-1">
                            <FaMoneyBillWave className="text-primary" />Salary Range:
                            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                        </span>
                        <span className="badge badge-outline">Category: {category}</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mt-8 space-y-6">
                <div>
                    <h2 className="text-xl font-semibold ">Job Description</h2>
                    <p className="text-sm  mt-2">{description}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold ">Responsibilities</h2>
                    <ul className="list-disc pl-6 mt-2 text-sm ">
                        {responsibilities.map((res, idx) => (
                            <li key={idx}>{res}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold ">Requirements</h2>
                    <ul className="list-disc pl-6 mt-2 text-sm ">
                        {requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center my-5 md:my-10'>
                <Link to={`/jobApply/${_id}`}><button className='btn btn-outline btn-primary w-90'>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default JobDetails;
