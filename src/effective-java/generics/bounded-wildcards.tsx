import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/31-bounded-wildcards.md");

export const BoundedWildcards = () => (
    <article>
        <ExpandableSection title="Use bounded wildcards to increase API flexibility">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
