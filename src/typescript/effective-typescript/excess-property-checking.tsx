import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/11-excess-property-checking.md");

export const ExcessPropertyChecking = () => (
    <article>
        <ExpandableSection
            title="Recognize the limits of excess property checking"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
