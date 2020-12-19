import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const appVsLibraryConcernsMd = require("./markdowns/3-app-vs-library-concerns.md");

export const AppVsLibraryConcerns = () => (
    <article>
        <ExpandableSection title="Application vs Library Concerns">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{appVsLibraryConcernsMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
