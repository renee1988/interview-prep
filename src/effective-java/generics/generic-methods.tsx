import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const genericMethodsMd = require("./markdowns/29-generic-methods.md");

export const GenericMethods = () => (
    <article>
        <ExpandableSection title="Favor generic methods">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{genericMethodsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
