import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJobs = () => {

    const { user } = use(AuthContext);

    const handleAddJobs = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };

        //process requirements
        const requirementStrings = newJob.requirements;
        const requirementsDirty = requirementStrings.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;


        //process responsibilities
        const responsibilitiesClean = newJob.responsibilities.split(',').map(req => req.trim());
        newJob.responsibilities = responsibilitiesClean;

        newJob.status = "active";
        console.log(newJob);
        console.log(Object.keys(newJob).length);

        //save object to database
        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added a new job successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-2xl mx-auto bg-base-100 shadow-xl rounded-2xl border border-base-200 p-8">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-primary tracking-tight">Add a New Job</h1>
                <form onSubmit={handleAddJobs} className="space-y-6">
                    {/* Basic Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Basic Info</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label font-semibold">Job Title</label>
                                <input type="text" name="title" className="input input-bordered w-full" placeholder="Job Title" />
                            </div>
                            <div>
                                <label className="label font-semibold">Company</label>
                                <input type="text" name="company" className="input input-bordered w-full" placeholder="Company Name" />
                            </div>
                            <div>
                                <label className="label font-semibold">Company Location</label>
                                <input type="text" name="location" className="input input-bordered w-full" placeholder="Company Location" />
                            </div>
                            <div>
                                <label className="label font-semibold">Company Logo</label>
                                <input type="text" name="company_logo" className="input input-bordered w-full" placeholder="Company Logo URL" />
                            </div>
                        </div>
                    </fieldset>

                    {/* Job Type */}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Job Type</legend>
                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" type="radio" name="jobType" value="On-site Job" aria-label="On site job" />
                            <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote" />
                            <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
                        </div>
                    </fieldset>

                    {/* Job Category */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Job Category</legend>
                        <select defaultValue="Pick Job category" name="category" className="select select-bordered w-full">
                            <option disabled={true}>Pick a category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>
                    </fieldset>

                    {/* Application Deadline */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Application Deadline</legend>
                        <input type="date" name="deadline" className="input input-bordered w-full" />
                    </fieldset>

                    {/* Salary Range */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Salary Range</legend>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="label font-semibold">Minimum Salary</label>
                                <input type="text" name="min" className="input input-bordered w-full" placeholder="Minimum Salary" />
                            </div>
                            <div>
                                <label className="label font-semibold">Maximum Salary</label>
                                <input type="text" name="max" className="input input-bordered w-full" placeholder="Maximum Salary" />
                            </div>
                            <div>
                                <label className="label font-semibold">Currency</label>
                                <select defaultValue="Pick a currency" name="currency" className="select select-bordered w-full">
                                    <option disabled={true}>Pick a Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EU</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    {/* Job Description */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Job Description</legend>
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                    </fieldset>

                    {/* Job Requirements */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Job Requirements</legend>
                        <textarea name="requirements" className="textarea textarea-bordered w-full" placeholder="Job requirements (separate by comma)"></textarea>
                    </fieldset>

                    {/* Job Responsibilities */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">Job Responsibilities</legend>
                        <textarea name="responsibilities" className="textarea textarea-bordered w-full" placeholder="Job responsibilities (separate by comma)"></textarea>
                    </fieldset>

                    {/* HR Info */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 mb-4">
                        <legend className="fieldset-legend text-lg font-semibold text-accent">HR Info</legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label font-semibold">HR Name</label>
                                <input type="text" name="hr_name" className="input input-bordered w-full" placeholder="HR Name" />
                            </div>
                            <div>
                                <label className="label font-semibold">HR Email</label>
                                <input type="email" name="hr_email" defaultValue={user.email} readOnly className="input input-bordered w-full" placeholder="HR Email" />
                            </div>
                        </div>
                    </fieldset>

                    <div className="flex justify-center mt-5">
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg w-full max-w-xs transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                        >
                            Add Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;