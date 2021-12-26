import React from 'react';
import  './Projects.scss'
import ProjectsList from './ProjectsList';

export default function Projects() {


    const list=[
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'design',
            title: 'Design'
        },
        {
            id: 'content',
            title: "Content"
        },
    ];
    return (
        <div className='Portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <ProjectsList title={item.title} />
    ))}
            </ul>
            <div className='container'>
                <img src='../img/index.jpg' />
                <h3>Mobile App</h3>
            </div>
        </div>
    )
}


