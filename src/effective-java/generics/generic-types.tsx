import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const genericTypesMd = require("./markdowns/29-generic-types.md");

export const GenericTypes = () => (
    <article>
        <ExpandableSection title="Favor generic types">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{genericTypesMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
