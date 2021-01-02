import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/9-avoid-type-assertions.md");

export const AvoidTypeAssertions = () => (
    <article>
        <ExpandableSection
            title="Prefer type declaration to type assertion"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
