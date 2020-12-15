import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const documentExceptionsMd = require("./markdowns/74-document-exceptions.md");

export const DocumentExceptions = () => (
    <article>
        <ExpandableSection title="Document all exceptions thrown by each method">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{documentExceptionsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
