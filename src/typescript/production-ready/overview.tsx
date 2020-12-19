import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const overviewMd = require("./markdowns/1-overview.md");

export const Overview = () => (
    <article>
        <ExpandableSection title="Overview of TypeScript">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{overviewMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
