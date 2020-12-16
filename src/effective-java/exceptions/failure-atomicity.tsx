import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const failureAtomicityMd = require("./markdowns/76-failure-atomicity.md");

export const FailureAtomicity = () => (
    <article>
        <ExpandableSection title="Strive for failure atomicity">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{failureAtomicityMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
