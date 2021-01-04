import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const mds = [
    require("./markdowns/networking/1-vpc.md"),
];

export const Networking = () => (
    <article>
        <ExpandableSection title="Networking in GCP">
            {mds.map(md => <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>)}
        </ExpandableSection>
    </article>
);
