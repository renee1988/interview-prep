import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/18-keep-value-in-sync.md");

export const KeepValueInSync = () => (
    <article>
        <ExpandableSection
            title="Use mapped types to keep values in sync"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
