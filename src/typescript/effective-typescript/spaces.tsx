import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/8-spaces.md");

export const Spaces = () => (
    <article>
        <ExpandableSection
            title="How to tell whether a symbol is in the type space or value space?"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
