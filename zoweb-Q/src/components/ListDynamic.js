import React from 'react';
import { Icon } from 'antd';

const renderListItem = item => (
    <li key={item.key}>
        {item.icon && <Icon type={item.icon} />}
        <span>{item.text}</span>
    </li>
);

const renderTopList = item => ( 
    <li key={item.key}>
        {item.icon && <Icon type={item.icon} />}
        <span>{item.text}</span>
        <ul>
            {item.subs.map(item => item.subs ? renderTopList(item) : renderListItem(item))}
        </ul>
    </li>
);

const ListDynamic = ({items, ...props}) => (
    <ul {...props}>
        {items && items.map(item => 
            item.subs ? renderTopList(item) : renderListItem(item)
        )}
    </ul>
);

export default ListDynamic;