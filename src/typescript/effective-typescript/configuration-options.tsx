import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/2-typescript-operations.md");

export const ConfigurationOptions = () => (
    <article>
        <ExpandableSection
            title="Know which TypeScript options you are using"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
