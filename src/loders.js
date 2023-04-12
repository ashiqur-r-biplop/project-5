import { getLocalStorage } from "./Components/utilities/fakedb";

const jobsLoader = async () => {
    const loadedJobs = await fetch("/fakeData.json");
    const jobs = await loadedJobs.json();

    // if cart is in database, you have to use async await
    const savedAplliedJobs = getLocalStorage();
    const savedJobs = [];

    for (const id in savedAplliedJobs) {

        const exist = jobs.find(singleJob => singleJob.id === id);
        if (exist) {
            savedJobs.push(exist);
        }
    }

    return savedJobs;
}

export default jobsLoader;