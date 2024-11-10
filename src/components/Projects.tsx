import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing",
        img: "/Project_01.PNG",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScri power website to track time ",
        img: "/Project_02.PNG",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Website Header",
        desc: "A Next.js and TypeScri power website to track time ",
        img: "/Project_03.PNG",
        tags: ["Next.js", "CSS", "HTML"],
    },
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title= 'my Projects' />
      <div className='grid gap-10 xl: gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
}

export default Projects;
