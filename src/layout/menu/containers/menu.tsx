import React, {useCallback, useState, MouseEvent} from 'react';
import {useHistory} from 'react-router-dom'

import {Menu as MenuView} from '../components/menu';
import {MenuConfig} from '../interfaces';
import '../menu.css';

interface IMenu {
    menus: Array<MenuConfig>;
    parent?: MenuConfig;
}

export const Menu = ({menus, parent}: IMenu) => {
    const history = useHistory();
    const [expandedMenu, setExpandedMenu] = useState('');
    const onMenuItemClick = useCallback((e: MouseEvent) => {
        const menuDisplayName = e?.currentTarget?.getAttribute('data-menuname');
        if (expandedMenu !== menuDisplayName) {
            setExpandedMenu(menuDisplayName || '');
            if (e?.currentTarget?.getAttribute('data-route')) {
                const parentRoute = parent ? `/${parent.route}/` : '/';
                const currentRoute = e.currentTarget.getAttribute('data-route') || '';
                const route = `${parentRoute}${currentRoute}`
                history.push(route);
            }
        } else {
            setExpandedMenu('');
        }
    }, [expandedMenu, setExpandedMenu]);

    return (
        <MenuView
            menus={menus}
            onMenuItemClick={onMenuItemClick}
            expandedMenu={expandedMenu}
            parent={parent}
        />
    );
}
