import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const throwExceptionsMd = require("./markdowns/73-throw-exceptions.md");

export const ThrowExceptions = () => (
    <article>
        <ExpandableSection title="Throw exceptions appropriate to the absctraction">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{throwExceptionsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
