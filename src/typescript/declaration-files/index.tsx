import Markdown from 'markdown-to-jsx';
import React from 'react';

const declarationFilesMd = require("./markdowns/declaration-files.md");

export const DeclarationFiles = () => (
    <article>
        <div style={{padding: '1rem 2rem'}}>
            <Markdown>{declarationFilesMd}</Markdown>
        </div>
    </article>
);
