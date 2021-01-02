import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/12-type-to-function-expression.md");

export const TypeToFunctionExpression = () => (
    <article>
        <ExpandableSection
            title="Apply types to entire function expression when possible"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
