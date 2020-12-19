import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const latestTypeScriptFeaturesMd = require("./markdowns/2-latest-typescript-features.md");

export const LatestTypeScriptFeatures = () => (
    <article>
        <ExpandableSection title="Latest JavaScript and TypeScript Features">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{latestTypeScriptFeaturesMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
