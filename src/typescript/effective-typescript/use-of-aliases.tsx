import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/24-use-of-aliases.md");

export const UseOfAliases = () => (
    <article>
        <ExpandableSection
            title="Be consistent in your use of aliases"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
