import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/15-index-signature.md");

export const IndexSignature = () => (
    <article>
        <ExpandableSection
            title="Use index signature for dynamic data"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
