import React from 'react';
import {Overview} from './overview/index';
import {LatestTypescriptFeatures} from './latest-typescript-features';
import {AppVsLibraryConcerns} from './app-vs-library-concerns';
import { CreateProjectFromScratch } from './create-project-from-scratch';
import { DeclarationFiles } from './declaration-files';

export const Typescript = () => (
    <article>
        <Overview />
        <LatestTypescriptFeatures />
        <AppVsLibraryConcerns />
        <CreateProjectFromScratch />
        <DeclarationFiles />
    </article>
);
