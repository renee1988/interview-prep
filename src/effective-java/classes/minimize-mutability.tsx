import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const minimizeMutabilitysMd = require("./markdowns/17-minimize-mutability.md");

export const MinimizeMutability = () => (
    <article>
        <ExpandableSection title="Minimiaze mutability">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{minimizeMutabilitysMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
