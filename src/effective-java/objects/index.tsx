import React from 'react';
import { StaticFactory } from './static-factory';
import { Builder } from './builder';

export const ObjectCreationAndDestruction = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <StaticFactory />
        <Builder />
    </article>
);
