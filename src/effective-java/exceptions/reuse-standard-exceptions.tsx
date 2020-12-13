import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const standardExceptionsMd = require("./markdowns/72-standard-exceptions.md");

export const ReuseStandardExceptions = () => (
    <article>
        <ExpandableSection title="Favor to use standard exceptions">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{standardExceptionsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
