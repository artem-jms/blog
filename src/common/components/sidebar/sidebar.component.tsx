import React, {FC, useState} from 'react';

interface SidebarProps {

}

export const Sidebar:FC<SidebarProps> = ({}) => {

    const [tags, setTags] = useState([
        {
            active: false,
            title: 'welcome',
            _id: 0,
        },
        {
            active: false,
            title: 'implementations',
            _id: 1,
        },
        {
            active: false,
            title: 'ipsum',
            _id: 2,
        },
        {
            active: false,
            title: 'cupidicate',
            _id: 3,
        },
        {
            active: false,
            title: 'it',
            _id: 4,
        },
    ])

    return (
        <div className={'p-sidebar rounded bg-sidebar-bg'}>
            <p className={'mb-[5px]'}>Popular tags</p>
            <div className={'flex flex-wrap '}>
                {tags.map(tag => (
                    <a
                        className={'text-sm bg-sidebar-a hover:bg-sidebar-aHover mr-1 mb-1 rounded px-2 py-px text-white rounded-sidebar'}
                        href={'/'} key={tag._id}>{tag.title}</a>
                ))}
            </div>
        </div>
    );
};