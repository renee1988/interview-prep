import React, {useState, useCallback, ReactNode} from 'react';

interface IExpandableSection {
    children: ReactNode;
    title: string;
    description?: string;
}

export const ExpandableSection = ({children, description, title}: IExpandableSection) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);

    return (
        <div>
            <div
                onClick={toggleExpand}
                style={{
                    backgroundColor: '#EEEEEE',
                    padding: expanded ? '1.5rem 2rem 0 2rem' : '1.5rem 2rem',
                    cursor: 'pointer',
                }}
            >    
                <div 
                    style={{
                        display: 'inline-block',
                        paddingRight: '1rem',
                        verticalAlign: 'middle',
                        fontSize: '20px'
                    }}
                >
                    {expanded ? '-' : '+'}
                </div>
                <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                    <div style={{fontSize: '25px'}}>{title}</div>
                    {description && (
                        <div style={{fontSize: '16px', marginTop: '1rem'}}>{description}</div>
                    )}
                </div>
            </div>
            {expanded &&
                <div style={{backgroundColor: '#EEEEEE'}}>{children}</div>}
        </div>
    );
}
