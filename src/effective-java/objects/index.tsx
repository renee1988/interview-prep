import React from 'react';
import { StaticFactory } from './static-factory';
import { Builder } from './builder';
import { DependencyInjection } from './dependency-injection';

export const ObjectCreationAndDestruction = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <StaticFactory />
        <Builder />
        <DependencyInjection />
    </article>
);
