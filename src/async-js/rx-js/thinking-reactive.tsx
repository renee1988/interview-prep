import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const thinkingReactivelyMd = require("./markdowns/thinking-reactive/sync-vs-async.md");

export const ThinkingReactive = () => (
    <article>
        <ExpandableSection
            description="Callback-based vs. promise-based vs. observable-based asynchronous JS"
            title="Thinking Reactively"
        >
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{thinkingReactivelyMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
