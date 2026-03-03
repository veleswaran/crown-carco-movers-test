import React from 'react';
import { Hero } from '@/features/about/components/Hero';
import { Intro } from '@/features/about/components/Intro';
import { ServicesNarrative } from '@/features/about/components/ServicesNarrative';
import { Values } from '@/features/about/components/Values';
import { Network } from '@/features/about/components/Network';
import { Testimonials } from '@/features/about/components/Testimonials';

export default function About() {
    return (
        <div className="pt-20 bg-white">
            <Hero />
            <Intro />
            <ServicesNarrative />
            <Values />
            <Network />
            <Testimonials />
        </div>
    );
}
