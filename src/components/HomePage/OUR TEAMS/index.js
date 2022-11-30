import React from 'react';
import { OurTeamMembar } from '../../../utilities/Home/OurTeamMembar';
import TeamMemberCard from './TeamMemberCard';

const OurTeam = () => {
    return (
        <div className='min-h-screen px-4 md:px-0'>
            <h2 className='text-3xl font-bold uppercase  text-primary text-center'>OUR TEAMS</h2>
            <div className='grid grid-cols-2  md:grid-cols-4 gap-5 max-w-5xl mx-auto my-20'>
            {OurTeamMembar.map((member, index) => <TeamMemberCard key={index} member={member} />)}
              
            </div>
        </div>
    );
};

export default OurTeam;