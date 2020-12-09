import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const favorCompositionMd = require("./markdowns/18-favor-composition.md");

export const FavorComposition = () => (
    <article>
        <ExpandableSection title="Favor composition over inheritance">
            <div style={{padding: '1rem 2rem'}}>
                <Markdown>{favorCompositionMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
