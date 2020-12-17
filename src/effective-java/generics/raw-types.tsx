import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const rawTypesMd = require("./markdowns/26-raw-types.md");

export const RawTypes = () => (
    <article>
        <ExpandableSection title="Do not use raw types">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{rawTypesMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
