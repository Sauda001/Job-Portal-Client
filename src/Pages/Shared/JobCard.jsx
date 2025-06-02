import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { title, jobType, category, applicationDeadline, company_logo, description, _id } = job;

    return (
        <div className="card w-full max-w-md bg-base-300 border-2 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-2xl overflow-hidden">
            <figure className="bg-base-100 p-4">
                <img
                    src={company_logo}
                    alt={title}
                    className="w-24 h-24 object-contain"
                />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-xl font-semibold">
                    {title}
                    <span className="badge badge-secondary text-sm px-3 py-1 rounded-full">{jobType}</span>
                </h2>
                <p className="text-sm text-gray-500 line-clamp-3">{description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                    <span className="badge badge-outline px-3 py-1 text-sm">{category}</span>
                    <span className="badge badge-outline px-3 py-1 text-sm">Deadline: {applicationDeadline}</span>
                </div>

                <div className="pt-4">
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary w-full rounded-full">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
