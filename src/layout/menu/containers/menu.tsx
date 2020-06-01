import React, {useCallback, useState, MouseEvent} from 'react';

import {Menu as MenuView} from '../components/menu';
import '../menu.css';

export const Menu = () => {
    const [expandedMenu, setExpandedMenu] = useState('');
    const onMenuItemClick = useCallback((e: MouseEvent) => {
        const menuDisplayName = e?.currentTarget?.getAttribute('data-testid');
        if (expandedMenu !== menuDisplayName) {
            setExpandedMenu(menuDisplayName || '');
        } else {
            setExpandedMenu('');
        }
    }, [expandedMenu, setExpandedMenu]);

    return (
        <MenuView onMenuItemClick={onMenuItemClick} expandedMenu={expandedMenu} />
    )
}
