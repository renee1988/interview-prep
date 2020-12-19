import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const declarationFilesMd = require("./markdowns/5-declaration-files.md");

export const DeclarationFiles = () => (
    <article>
        <ExpandableSection title="Declaration Files">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{declarationFilesMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
