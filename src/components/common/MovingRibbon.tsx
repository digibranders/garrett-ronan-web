'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CONTACT_INFO = [
    "garrett@GKRHospitality.com",
    "+1-917-460-5793"


];

export default function MovingRibbon() {
    const items = [
        { label: "Garrett@GKRHospitality.com", href: "mailto:Garrett@GKRHospitality.com" },
        { label: "+1-917-460-5793", href: "tel:+1-917-460-5793" }
    ];

    return (
        <div className="fixed top-0 w-full z-[60] h-10 bg-[#c5a059] flex items-center overflow-hidden border-b border-[#181818]/10 select-none">
            <motion.div
                className="flex whitespace-nowrap items-center text-[#181818] text-[0.875rem] tracking-[0.3em] font-bold"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 300,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* Two identical sets for seamless looping */}
                <div className="flex items-center">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            {items.map((item, idx) => (
                                <span key={idx} className="flex items-center">
                                    <a
                                        href={item.href}
                                        className="px-12 hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
                                    >
                                        {item.label}
                                    </a>
                                    <span className="opacity-50 text-lg">•</span>
                                </span>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex items-center">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            {items.map((item, idx) => (
                                <span key={idx} className="flex items-center">
                                    <a
                                        href={item.href}
                                        className="px-12 hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
                                    >
                                        {item.label}
                                    </a>
                                    <span className="opacity-50 text-lg">•</span>
                                </span>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
