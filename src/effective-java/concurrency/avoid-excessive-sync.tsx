import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/79-avoid-excessive-sync.md");

export const AvoidExcessiveSync = () => (
    <article>
        <ExpandableSection title="Avoid eccessive synchronization">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
