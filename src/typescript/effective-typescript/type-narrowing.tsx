import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/22-type-narrowing.md");

export const TypeNarrowing = () => (
    <article>
        <ExpandableSection
            title="Understand type narrowing"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
