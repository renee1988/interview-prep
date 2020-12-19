import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const uncheckedWarningsMd = require("./markdowns/27-unchecked-warnings.md");

export const UncheckedWarnings = () => (
    <article>
        <ExpandableSection title="Eliminate unchecked warnings">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{uncheckedWarningsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
