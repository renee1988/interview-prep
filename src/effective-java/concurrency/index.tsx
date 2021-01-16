import React from 'react';
import { AvoidExcessiveSync } from './avoid-excessive-sync';
import { SyncAccess } from './sync-access';

export const Concurrency = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <SyncAccess />
        <AvoidExcessiveSync />
    </article>
);
