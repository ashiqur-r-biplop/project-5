import React from 'react';
import { getShoppingCart } from '../utilities/fakedb';

const AppliedJob = () => {
    const getData = getShoppingCart()
    console.log(getData)
    return (
        <div>
            i am in Applied Job
        </div>
    );
};

export default AppliedJob;