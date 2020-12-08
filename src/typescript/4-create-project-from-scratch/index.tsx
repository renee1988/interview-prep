import Markdown from 'markdown-to-jsx';
import React from 'react';

const createProjectFromScratchMd = require("./markdowns/create-project-from-scratch.md");

export const CreateProjectFromScratch = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{createProjectFromScratchMd}</Markdown>
        </div>
    </article>
);