import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const jsAndTsRelationshipMd = require("./markdowns/1-js-and-ts-relationship.md");

export const JsAndTsRelationship = () => (
    <article>
        <ExpandableSection
            title="What is the relationship between JavaScript and TypeScript?"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{jsAndTsRelationshipMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
