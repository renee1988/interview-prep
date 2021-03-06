import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/6-use-your-editor.md");

export const UseYourEditor = () => (
    <article>
        <ExpandableSection
            title="Use your editor to interrogate and explore the type system"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
