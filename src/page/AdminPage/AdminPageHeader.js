import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminPageBook from './AdminPageBook';
import AdminPageLeft from './AdminPageLeft';
import AdminPageMiddle from './AdminPageMiddle';
import AdminPageRight from './AdminPageRight';

const AdminPageHeader = () => {
    const items = [
        {
            label: <h3>Left content</h3>,
            key: 'left',
        },
        {
            label: <h3>Middle content</h3>,
            key: 'middle',
        },
        {
            label: <h3>Right content</h3>,
            key: 'right',
        },
        {
            label: <h3>Book content</h3>,
            key: 'book',
        },
    ];
    const [current, setCurrent] = useState('left');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            {current === 'left' ? <AdminPageLeft /> : current === 'right' ? <AdminPageRight /> : current === 'middle' ? <AdminPageMiddle /> : <AdminPageBook />}
        </div>

    )
}

export default AdminPageHeader