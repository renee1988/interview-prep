import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const mds = [
    require("./markdowns/networking/1-vpc.md"),
    require("./markdowns/networking/2-multiple-network-interfaces.md"),
    require("./markdowns/networking/3-access-controls.md"),
    require("./markdowns/networking/4-shared-vpc.md"),
    require("./markdowns/networking/5-vpc-peering.md"),
    require("./markdowns/networking/6-load-balancing-overview.md"),
    require("./markdowns/networking/7-managed-instance-groups.md"),
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
