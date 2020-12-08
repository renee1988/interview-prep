import Markdown from 'markdown-to-jsx';
import React from 'react';

const latestTypescriptFeaturesMd = require("./markdowns/latest-typescript-features.md");

export const LatestTypescriptFeatures = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{latestTypescriptFeaturesMd}</Markdown>
        </div>
    </article>
);
