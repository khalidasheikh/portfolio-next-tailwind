import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div>
                    <h2 className='text-4xl md:text-5xl'>Techologies I work with</h2>
                    <p className='text-gray-500 pt-2'>I have a solid foundation in web development, perfect in HTML, CSS, and Typscript. My experience extends to using  framworks like React and Next.js to create dunamic and user-friendly applications. I'm also perfect in Tailwind CSS for efficient styling and design. With a passion for learning, I stay update on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                            <h2>Typescript</h2>
                            <h2>React.js</h2>
                            <h2>Next.js</h2>
                        </div>
                        <div className='space-y-2'>
                            <h2>Tailwind</h2>
                            <h2>CSS</h2>
                            <h2>Node.js</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;
