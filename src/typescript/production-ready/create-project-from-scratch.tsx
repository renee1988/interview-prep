import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const createProjectFromScratchMd = require("./markdowns/4-create-project-from-scratch.md");

export const CreateProjectFromScratch = () => (
    <article>
        <ExpandableSection title="Create Project From Scratch">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{createProjectFromScratchMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
