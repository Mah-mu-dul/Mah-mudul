import React from 'react';
import Experience_card from './Experience_card';
import Education_card from './Education_card';

const Education_Experience = () => {

    return (
        <div className='grid h-fit lg:grid-cols-2 grid-cols-2  w-full'>
            <Education_card />
            <Experience_card />
        </div>
    );
};

export default Education_Experience;