import React from 'react';
import ProcessSection from '@/components/home/ProcessSection';
import { HOW_WE_WORK } from '@/data/homeData';

export const metadata = {
    title: 'How We Work | GKR Hospitality',
    description: 'Our proven process for delivering exceptional hospitality solutions.',
};

export default function HowWeWorkPage() {
    return (
        <main className="bg-[#181818] min-h-screen">
            <ProcessSection steps={HOW_WE_WORK} />
        </main>
    );
}
