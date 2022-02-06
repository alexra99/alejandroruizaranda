import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';

function ResumePage() {
    return (
        <div className='ResumePage' id='formacion'>
            <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
        </div>
        
    )
}

export default ResumePage
