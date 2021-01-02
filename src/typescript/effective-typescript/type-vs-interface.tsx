import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/13-type-vs-interface.md");

export const TypeVsInterface = () => (
    <article>
        <ExpandableSection
            title="Know the difference between type and interface"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
