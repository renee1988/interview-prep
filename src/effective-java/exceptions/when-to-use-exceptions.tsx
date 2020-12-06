import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const whenToUseExceptionsMd = require("./markdowns/69-when-to-use-exceptions.md");

export const WhenToUseExceptions = () => (
    <article>
        <ExpandableSection
            description="Use exceptions only for exceptional conditions"
            title="When to use exceptions"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{whenToUseExceptionsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
