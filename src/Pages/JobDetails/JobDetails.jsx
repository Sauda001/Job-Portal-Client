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
    FaListAlt,
    FaClipboardCheck,
    FaClipboardList,
    FaInfoCircle,
} from 'react-icons/fa';

const JobDetails = () => {
    const jobDetails = useLoaderData();

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
        <div className="min-h-screen py-10">
            <div className="max-w-5xl mx-auto p-6 bg-base-100 shadow-xl rounded-2xl border-3 border-base-200 my-5 md:my-15">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Logo */}
                    <div className="bg-base-200 p-6 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md">
                        <img src={company_logo} alt="Company Logo" className="w-36 h-36 object-contain rounded-lg shadow" />
                    </div>

                    {/* Job Info */}
                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl font-extrabold text-primary mb-2 flex items-center gap-2">
                            <FaInfoCircle className="text-primary" /> {title}
                        </h1>
                        <div className="space-y-1">
                            <p className="text-lg flex items-center gap-2">
                                <FaUserTie className="text-primary" /><span className="font-semibold">HR Name:</span> {hr_name}
                            </p>
                            <p className="text-sm flex items-center gap-2">
                                <FaEnvelope className="text-primary" /><span className="font-semibold">HR Email:</span> {hr_email}
                            </p>
                            <p className="text-sm flex items-center gap-2">
                                <FaBuilding className="text-primary" /><span className="font-semibold">Company:</span> {company}
                            </p>
                            <p className="text-sm flex items-center gap-2">
                                <FaCalendarAlt className="text-primary" /><span className="font-semibold">Deadline:</span> {applicationDeadline}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <span className="badge badge-outline flex items-center gap-1 px-3 py-2 text-base">
                                <FaBriefcase className="text-primary" /> {jobType}
                            </span>
                            <span className="badge badge-outline flex items-center gap-1 px-3 py-2 text-base">
                                <FaMapMarkerAlt className="text-primary" /> {location}
                            </span>
                            <span className="badge badge-outline flex items-center gap-1 px-3 py-2 text-base">
                                <FaCheckCircle className="text-primary" /> {status}
                            </span>
                            <span className="badge badge-outline flex items-center gap-1 px-3 py-2 text-base">
                                <FaMoneyBillWave className="text-primary" /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                            </span>
                            <span className="badge badge-outline px-3 py-2 text-base">Category: {category}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-10 space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold flex items-center gap-2 text-accent">
                            <FaListAlt /> Job Description
                        </h2>
                        <p className="text-base mt-2 ">{description}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold flex items-center gap-2 text-accent">
                            <FaClipboardCheck /> Responsibilities
                        </h2>
                        <ul className="list-disc pl-7 mt-2 text-base  space-y-1">
                            {responsibilities.map((res, idx) => (
                                <li key={idx}>{res}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold flex items-center gap-2 text-accent">
                            <FaClipboardList /> Requirements
                        </h2>
                        <ul className="list-disc pl-7 mt-2 text-base  space-y-1">
                            {requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center my-8'>
                    <Link to={`/jobApply/${_id}`}>
                        <button className='btn btn-primary btn-lg px-10 transition-transform duration-200 hover:scale-105 hover:shadow-lg'>
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
