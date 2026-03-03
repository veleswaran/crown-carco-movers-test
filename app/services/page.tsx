import React from 'react';
import { Header } from '@/features/services/components/Header';
import { ServiceGrid } from '@/features/services/components/ServiceGrid';
import { Excellence } from '@/features/services/components/Excellence';
import { Audience } from '@/features/services/components/Audience';
import { EnterpriseCallout } from '@/features/services/components/EnterpriseCallout';

export default function Services() {
    return (
        <div className="pt-20 bg-white min-h-screen">
            <Header />
            <ServiceGrid />
            <Excellence />
            <Audience />
            <EnterpriseCallout />
        </div>
    );
}
