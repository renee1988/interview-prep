import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/10-avoid-wrapper-types.md");

export const AvoidWrapperTypes = () => (
    <article>
        <ExpandableSection title="Avoid object wrapper types">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
