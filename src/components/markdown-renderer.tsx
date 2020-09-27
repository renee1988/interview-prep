import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';

import { getAllMarkdowns } from '../utils';

interface IMarkdownRenderer {
    path: string;
} 

export const MarkdownSection = ({path}: IMarkdownRenderer) => {
    const [markdowns, setMarkdowns] = useState(['']);

    useEffect(() => {
        getAllMarkdowns(path)
            .then(filePaths => {
                setMarkdowns(filePaths.map(path => require(path)));
            });
    }, [path]);

    return (
        <section>
            {
                markdowns.map(md => (
                    <Markdown>{md}</Markdown>
                ))
            }
        </section>
    )
}
