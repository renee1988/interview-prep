import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/3-code-gen.md");

export const CodeGen = () => (
    <article>
        <ExpandableSection
            title="Understand Code Generation is Independent of Types"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
