import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const md = require("./markdowns/78-sync-access-to-shared-mutable-data.md");

export const SyncAccess = () => (
    <article>
        <ExpandableSection title="Synchronize access to shared mutable data">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{md}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
