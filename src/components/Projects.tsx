import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img: "/Project_1.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScri powered website to track time with an interactive coundown feature.",
        img: "/Project_02.jpg",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Website Header",
        desc: "A simple HTML,CSS and Next.js powered tool for Header.",
        img: "/Project_03.jpg",
        tags: ["Next.js", "CSS", "HTML"],
    },
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title= 'My Projects' />
      <div className='grid gap-10px xl: gap-0px xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects;
