import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';
import Loading from '../../Pages/Shared/Loading';

const MyPostedJobs = () => {

    const { user } = UseAuth();

    return (
        <div>
            <h1>My Posted Jobs</h1>
            <Suspense fallback={<Loading></Loading>}>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;