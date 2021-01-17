import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/17-readonly.md");

export const ReadonlyModifier = () => (
    <article>
        <ExpandableSection
            title="Use readonly to avoid errors associated with mutation"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
