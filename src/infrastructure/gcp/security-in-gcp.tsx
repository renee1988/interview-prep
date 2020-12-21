import Markdown from 'markdown-to-jsx';
import React from 'react';

import {ExpandableSection} from '../../components/expandable-section';

const overviewMd = require("./markdowns/security-in-gcp/1-approach.md");
const cloudIdentityMd = require("./markdowns/security-in-gcp/2-cloud-identity.md");
const iamMd = require("./markdowns/security-in-gcp/3-iam.md");

export const SecurityInGCP = () => (
    <article>
        <ExpandableSection title="Security in GCP">
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{overviewMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{cloudIdentityMd}</Markdown>
            </div>
            <div style={{padding: '1rem 2rem 0rem 2rem'}}>
                <Markdown>{iamMd}</Markdown>
            </div>
        </ExpandableSection>
    </article>
);
