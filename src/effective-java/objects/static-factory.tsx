import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const staticFactoryMd = require("./markdowns/1-static-factory.md");

export const StaticFactory = () => (
    <article>
        <ExpandableSection
            description="Consider static factory methods instead of constructors"
            title="Static Factory Method"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{staticFactoryMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
