import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const dependencyInjectionMd = require("./markdowns/5-dependency-injection.md");

export const DependencyInjection = () => (
    <article>
        <ExpandableSection title="Prefer dependency injection over hardwiring resources">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{dependencyInjectionMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
