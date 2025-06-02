import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import ApplicationList from './ApplicationList';
import Loading from '../Shared/Loading';
import UseAuth from '../../Hooks/UseAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';


const MyAppplications = () => {

    const { user } = UseAuth();

    return (
        <div>
            <ApplicationState></ApplicationState>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyAppplications;