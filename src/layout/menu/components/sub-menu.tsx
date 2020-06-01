import React, {memo} from 'react';

import {MenuConfig} from '../interfaces';

interface ISubMenu {
    menuConfigs: Array<MenuConfig>,
}

export const SubMenu = memo<ISubMenu>(({menuConfigs}: ISubMenu) => (
    <div key="sub-menu-container" className="sub-menu-container">
        {menuConfigs.map(config => (
            <div key={config.route} className="sub-menu-item">{config.displayName}</div>
        ))}
    </div>
));
