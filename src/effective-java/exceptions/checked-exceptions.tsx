import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const checkedExceptionsMd = require("./markdowns/70-checked-exceptions.md");

export const CheckedExceptions = () => (
    <article>
        <ExpandableSection
            description="Use checked exceptions for recoverable conditions and runtime exceptionsfor programming errors"
            title="Checked Exceptions vs. Unchecked Exceptions"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{checkedExceptionsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
