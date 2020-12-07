import Markdown from 'markdown-to-jsx';
import React from 'react';

const appVsLibraryConcernsMd = require("./markdowns/app-vs-library-concerns.md");

export const AppVsLibraryConcerns = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{appVsLibraryConcernsMd}</Markdown>
        </div>
    </article>
);
