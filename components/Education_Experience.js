import React from 'react';
import Experience_card from './Experience_card';
import Education_card from './Education_card';

const Education_Experience = () => {

    return (
        <div className='flex flex-wrap justify-evenly'>
            <Education_card />
            <Experience_card />
        </div>
    );
};

export default Education_Experience;