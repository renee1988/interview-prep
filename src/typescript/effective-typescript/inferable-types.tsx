import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/19-inferable-types.md");

export const InferableTypes = () => (
    <article>
        <ExpandableSection
            title="Avoid cluttering your code with inferable types"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
