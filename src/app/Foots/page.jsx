import React from 'react';
import FootsCard from '../components/FootsCard';

const FootsPage = async () => {
    const res= await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json()
    const foots = data.data
    return (
        <div>
            <h1>Foots Page {foots.length} </h1>
           <div className='grid grid-cols-3 gap-4'>
            {
                foots.map(foot=> <FootsCard foots={foots} key={foots.id}></FootsCard>)
            }
           </div>
            
        </div>
    );
};

export default FootsPage;