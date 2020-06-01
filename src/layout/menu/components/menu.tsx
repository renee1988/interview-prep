import React, {memo, MouseEvent} from 'react';

import {MENUS} from '../constants';
import {MenuItem} from './menu-item';

interface IMenu {
    expandedMenu?: string,
    onMenuItemClick(e: MouseEvent): void,
}

export const Menu = memo<IMenu>(({expandedMenu, onMenuItemClick}: IMenu) => (
    <div key="menu-container" className="menu-container">
        {MENUS.map(menuConfig => (
            <MenuItem
                key={menuConfig.route}
                menuConfig={menuConfig}
                showSubMenu={menuConfig.displayName === expandedMenu}
                onClick={onMenuItemClick}
            />
        ))}
    </div>
));
