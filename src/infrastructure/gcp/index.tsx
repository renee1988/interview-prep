import React from 'react';
import { GkeFoundations } from './gke-foundation';
import {SecurityInGCP} from './security-in-gcp';

export const GCP = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <SecurityInGCP />
        <GkeFoundations />
    </article>
);
