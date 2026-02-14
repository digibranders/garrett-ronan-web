'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface Service {
    title: string;
    description: string;
    descriptionList?: string[];
    bgImage: StaticImageData;
    anchor: string;
}

interface WhatWeDoSectionProps {
    services: Service[];
}

export default function WhatWeDoSection({ services }: WhatWeDoSectionProps) {
    return (
        <section id="what-we-do" className="py-20 md:py-32 bg-[#ffffff]">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">What We Do</span>
                    <h2 className="text-5xl md:text-7xl font-serif leading-tight text-[#181818] mb-8">
                        Comprehensive <br />
                        <span className="italic text-[#c5a059]">Hospitality Solutions</span>
                    </h2>
                    <p className="text-[#181818] text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
                        From concept to operations, we provide integrated support across every phase of your hospitality journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} total={services.length} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index, total }: { service: Service; index: number; total: number }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`relative h-[500px] overflow-hidden group cursor-pointer shadow-xl ${index === total - 1 ? 'lg:col-start-2' : ''}`}
            onClick={() => setIsActive(!isActive)}
            onMouseLeave={() => setIsActive(false)}
        >
            {/* Image Background */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent opacity-80 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'group-hover:opacity-0'}`}></div>
            </div>

            {/* Initial Content (Title) */}
            <div className={`absolute bottom-0 left-0 w-full p-8 transition-all duration-500 transform z-10 ${isActive ? 'translate-y-[20px] opacity-0' : 'group-hover:translate-y-[20px] group-hover:opacity-0'}`}>
                <h3 className="text-3xl font-serif text-white mb-2">
                    {service.title}
                </h3>
                <span className="text-[#c5a059] text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2">
                    View Services <span className="text-lg">&uarr;</span>
                </span>
            </div>

            {/* Slide-Up Content (Gold Background) */}
            <div className={`absolute inset-0 bg-[#c5a059] p-6 flex flex-col justify-center transition-transform duration-500 z-20 ${isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
                <ul className="space-y-1.5 w-full">
                    {service.descriptionList?.map((item, i) => (
                        <li key={i} className="text-[#181818] text-[11px] md:text-xs leading-snug border-b border-[#181818]/10 pb-1 last:border-0 last:pb-0 font-medium">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
