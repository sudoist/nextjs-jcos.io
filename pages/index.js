import React from "react";

import Skills from '../components/skills';
import Experience from "../components/experience";

export async function getStaticProps() {
    // Call the fetch method and passing
    const fetchTimelines = await fetch( process.env.API_HOST + '/cv/timelines');

    // Parse the JSON
    const timelines = await fetchTimelines.json();

    // Call the fetch method and passing
    const fetchExperiences = await fetch(process.env.API_HOST + '/cv/experiences');

    // Parse the JSON
    const experiences = await fetchExperiences.json();

    // Call the fetch method and passing
    const fetchContacts = await fetch(process.env.API_HOST + '/cv/contacts');

    // Parse the JSON
    const contacts = await fetchContacts.json();

    // Call the fetch method and passing
    const fetchSkills = await fetch(process.env.API_HOST + '/cv/skills');

    // Parse the JSON
    const skills = await fetchSkills.json();

    // Call the fetch method and passing
    const fetchSkillIcons = await fetch(process.env.API_HOST + '/cv/skills/icons');

    // Parse the JSON
    const skillIcons = await fetchSkillIcons.json();

    // Finally we return the results
    return {
        props: {
            timelines: timelines.data,
            experiences: experiences.data,
            contacts: contacts.data,
            skills: skills.data,
            skillIcons: skillIcons.data,
        },
    };
}

const icons = {
    GitHub: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    ),
    LinkedIn: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    ),
    Phone: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
        </svg>
    ),
    Email: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
        </svg>

    ),
};

export default function Home({timelines, experiences, contacts, skills, skillIcons}) {
    return (
        <div className="bg-white">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">John Cosio</span>
                            <img
                                className="h-24 w-auto"
                                src="https://res.cloudinary.com/langitlupakintoncloud/image/upload/w_800/hugo/jcos.io/logo512x512_ghwawd.png"
                                alt="John Cosio"
                            />
                        </a>
                    </div>
                </nav>
            </header>

            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                    <div
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                        <div
                            className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                                John Cosio
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-lg leading-8 text-gray-600 mb-5">
                                    Full Stack Developer with over 13 years of experience in web development.
                                </p>
                                <p className="text-lg leading-8 text-gray-600 mb-5">
                                    Projects ranging from creating new applications and maintenance of legacy applications.
                                </p>
                                <p className="text-lg leading-8 text-gray-600 mb-5">
                                    I try to understand the most efficient approach based on provided resources and
                                    constraints to
                                    provide by quantifiable value in terms of profits and statistics.
                                </p>
                                <p className="text-lg leading-8 text-gray-600 mb-5">
                                    Making it simple. No need for fancy tech buzzwords.
                                </p>
                                <p className="text-lg leading-8 text-gray-600 mb-5">
                                    Let me know how I can help.
                                </p>
                                <div className="mx-auto max-w-7xl pb-8">
                                    <div
                                        className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-16">
                                        <div className="flex space-x-6 md:order-2">
                                            {contacts.map((item) => (
                                                <a key={item.name} href={item.href}
                                                   className="text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">{item.name}</span>
                                                    {React.createElement(icons[item.icon], {className: "h-6 w-6"})}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                src="/images/photo.png"
                                alt="John Cosio"
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
                </div>

                {/* Timeline section */}
                <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl my-12 font-bold tracking-tight text-gray-900 sm:text-4xl">
                        How the years went by:
                    </h2>
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {timelines.map((item) => (
                            <div key={item.id}>
                                <time
                                    dateTime={item.dateTime}
                                    className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                                >
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor"/>
                                    </svg>
                                    {item.date}
                                    <div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:ml-8 lg:-mr-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />
                                </time>
                                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
                    <div
                        className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Technical Skills
                        </h2>
                        <p className="mx-auto my-6 max-w-3xl text-lg leading-8 text-gray-300">
                            The table below answers in checks the common question to "rate yourself on a scale of 1 to 5".
                        </p>
                        <Skills skills={skills}/>

                        {/* List logos */}
                        <div
                            className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-12">
                            {skillIcons.map((item) => (
                                <img
                                key={item.id}
                                className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src={item.src}
                                alt={item.alt}
                                width="12"
                                height="12"
                                />
                            ))}
                        </div>
                        <svg
                            viewBox="0 0 1404 767"
                            className="absolute -top-24 right-0 -z-10 w-[87.75rem] transform-gpu blur-3xl"
                            aria-hidden="true"
                        >
                            <path
                                fill="url(#2cc9a831-91be-4f6b-a472-ee8b830c76f5)"
                                fillOpacity=".25"
                                d="m320.322 489.353-208.101-63.479L.829 766.92l319.493-277.567 374.785 114.326C630.42 488.216 572.913 273.941 860.374 340.544c359.326 83.254 407.216 309.974 508.406 95.017 80.95-171.966.55-341.344-49.77-404.537l-278.72 296.659L883.28.27 320.322 489.353Z"
                            />
                            <defs>
                                <linearGradient
                                    id="2cc9a831-91be-4f6b-a472-ee8b830c76f5"
                                    x1="1530.54"
                                    x2="-123.297"
                                    y1="389.692"
                                    y2="484.042"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#4F46E5"/>
                                    <stop offset={1} stopColor="#80CAFF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Experience
                    </h2>

                    <div className="mx-auto mt-12 max-w-2xl sm:mt-18 sm:px-6 lg:px-8">
                        <Experience experiences={experiences}/>

                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-100">
                    <div
                        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Contact me
                            <br/>
                            <div className="mt-4 flex space-x-6 md:order-2">
                                {contacts.map((item) => (
                                    <a key={item.name} href={item.href}
                                       className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{item.name}</span>
                                        {React.createElement(icons[item.icon], {className: "h-6 w-6"})}
                                    </a>
                                ))}
                            </div>
                        </h2>
                        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                            <a href="https://projects.jcos.io/"
                               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                View projects
                            </a>
                            <a href="https://jcos.io/" className="text-sm font-semibold leading-6 text-gray-900">About me <span
                                aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}
