import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/4-structural-typing.md");

export const StructuralTyping = () => (
    <article>
        <ExpandableSection
            title="Get Comfortable with Structural Typing"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
