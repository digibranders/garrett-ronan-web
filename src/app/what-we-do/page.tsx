'use client';

import React from 'react';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import { SERVICES_DATA } from '@/data/homeData';

export default function WhatWeDoPage() {
    return (
        <main className="bg-[#181818] pt-20">
            <WhatWeDoSection services={SERVICES_DATA} />
        </main>
    );
}
