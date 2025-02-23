import Footer from '@/components/footer/Footer';
import Navbar from '@/components/shared/Navbar';

import React, { ReactNode } from 'react';

const MainLayout = async ({ children }: { children: ReactNode }) => {

    return (
        <div className='bg-[#19181E]'>
            {/* <div className='bg-gradient-to-tr from-pink-800 via-[#0c38e9] to-[#31ffcc]'> */}
            <Navbar />
            <div className='max-w-7xl px-4 lg:px-0 my-16 mx-auto'>
                {children}

            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;