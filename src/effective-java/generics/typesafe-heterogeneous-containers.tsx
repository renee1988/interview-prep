import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/33-typesafe-heterogeneous-containers.md");

export const TypesafeHeterogeneousContainers = () => (
    <article>
        <ExpandableSection title="Consider typesafe hetergeneous containers">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
