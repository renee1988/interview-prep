import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/7-types-as-sets-of-values.md");

export const TypesAsSetsOfValues = () => (
    <article>
        <ExpandableSection
            title="Think of types as sets of values"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
