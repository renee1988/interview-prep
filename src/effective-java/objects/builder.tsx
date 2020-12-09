import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const builderMd = require("./markdowns/2-builder.md");

export const Builder = () => (
    <article>
        <ExpandableSection
            description="Consider a builder when faced with many constructor parameters."
            title="Builder with many constructor parameters"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{builderMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
