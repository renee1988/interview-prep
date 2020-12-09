import React from 'react';
import { FavorComposition } from './favor-composition';
import { MinimizeMutability } from './minimize-mutability';

export const ClassesAndInterfaces = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <MinimizeMutability />
        <FavorComposition />
    </article>
);
