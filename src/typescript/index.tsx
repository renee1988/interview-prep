import React from 'react';
import {Overview} from './1-overview/index';
import {LatestTypescriptFeatures} from './2-latest-typescript-features';
import {AppVsLibraryConcerns} from './3-app-vs-library-concerns';
import { CreateProjectFromScratch } from './4-create-project-from-scratch';
import { DeclarationFiles } from './5-declaration-files';

export const Typescript = () => (
    <article>
        <Overview />
        <LatestTypescriptFeatures />
        <AppVsLibraryConcerns />
        <CreateProjectFromScratch />
        <DeclarationFiles />
    </article>
);
