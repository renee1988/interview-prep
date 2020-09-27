import React, {memo, MouseEvent} from 'react';

import {MenuItem} from './menu-item';
import {MenuConfig} from '../interfaces';

interface IMenu {
    expandedMenu?: string,
    menus: Array<MenuConfig>,
    parent?: MenuConfig,
    onMenuItemClick(e: MouseEvent): void,
}

export const Menu = memo<IMenu>(({expandedMenu, menus, parent, onMenuItemClick}: IMenu) => (
    <div key="menu-container" className={parent ? "sub-menu-container" : "menu-container"}>
        {menus.map(menuConfig => (
            <MenuItem
                key={menuConfig.route}
                menuConfig={menuConfig}
                parent={parent}
                showSubMenu={menuConfig.displayName === expandedMenu}
                onClick={onMenuItemClick}
            />
        ))}
    </div>
));
