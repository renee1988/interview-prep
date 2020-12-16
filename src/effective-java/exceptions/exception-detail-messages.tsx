import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const exceptionDetailMessagesMd = require("./markdowns/75-exception-detail-messages.md");

export const ExceptionDetailMessages = () => (
    <article>
        <ExpandableSection title="Include failure-capture information in detail messages">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{exceptionDetailMessagesMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
