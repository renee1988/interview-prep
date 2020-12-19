import React from 'react';
import { Overview } from './overview';
import { LatestTypeScriptFeatures } from './latest-typescript-features';
import { AppVsLibraryConcerns } from './app-vs-library-concerns';
import { CreateProjectFromScratch } from './create-project-from-scratch';
import { DeclarationFiles } from './declaration-files';

export const ProductionReadyTypeScript = () => (
    <article style={{display: 'grid', rowGap: '1.5rem'}}>
        <Overview />
        <LatestTypeScriptFeatures />
        <AppVsLibraryConcerns />
        <CreateProjectFromScratch />
        <DeclarationFiles />
    </article>
);
