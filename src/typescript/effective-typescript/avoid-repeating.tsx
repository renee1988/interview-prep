import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/14-avoid-repeating.md");

export const AvoidRepeating = () => (
    <article>
        <ExpandableSection
            title="Use type operations and generics to avoid repeating yourself"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
