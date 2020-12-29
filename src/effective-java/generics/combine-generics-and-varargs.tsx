import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/32-combine-generics-and-varargs.md");

export const CombineGenericsAndVarargs = () => (
    <article>
        <ExpandableSection title="Combine generics and varargs judiciously">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
