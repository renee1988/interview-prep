import React from 'react';
import {Overview} from './overview/index';
import {LatestTypescriptFeatures} from './latest-typescript-features';
import {AppVsLibraryConcerns} from './app-vs-library-concerns';

export const Typescript = () => (
    <article>
        <Overview />
        <LatestTypescriptFeatures />
        <AppVsLibraryConcerns />
    </article>
);
