import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown/with-html'

interface IMarkdownRenderer {
    sourceFilePath: string;
}

export const MarkdownRenderer = ({sourceFilePath}: IMarkdownRenderer) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(sourceFilePath)
            .then(content => {
                return content.text()
            })
            .then(text => {
                setMarkdown(text)
            });
    }, []);
    
    return <ReactMarkdown source={markdown} />;
}
