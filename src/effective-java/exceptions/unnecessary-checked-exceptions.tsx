import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const unnecessaryCheckedExceptionsMd = require("./markdowns/71-unnecessary-checked-exceptions.md");

export const UnnecessaryCheckedExceptions = () => (
    <article>
        <ExpandableSection title="Avoid unnecessary checked exceptions">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{unnecessaryCheckedExceptionsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
