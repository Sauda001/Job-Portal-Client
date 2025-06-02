import React, { Suspense, use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobsPromise }) => {
console.log(jobsPromise);

    const jobs = use(jobsPromise)

    return (
        <div className='lg:max-w-7xl mx-auto'>
            <h1 className='text-center text-4xl my-5 md:my-15'> Total Featured Jobs: {jobs.length}</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-5 md:mb-15'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;