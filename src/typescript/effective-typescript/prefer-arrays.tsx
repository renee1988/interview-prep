import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/16-prefer-arrays-to-numbered-index-signature.md");

export const StructuralTyping = () => (
    <article>
        <ExpandableSection
            title="Prefer Arrays, Tuples and ArrayLike to numbered index signature"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
