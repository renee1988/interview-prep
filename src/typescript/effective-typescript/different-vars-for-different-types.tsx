import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/20-different-vars-for-different-types.md");

export const DifferentVariablesForDifferentTypes = () => (
    <article>
        <ExpandableSection
            title="Use different varaibles for different types"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
