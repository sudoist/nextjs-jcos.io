import {CalendarIcon, ChevronRightIcon} from '@heroicons/react/20/solid'

const skills = [
    {
        id: 1,
        title: 'Front End Development',
        tech: 'Tailwind CSS, Bootstrap, jQuery, Angular, Vue.js, React(This page)',
        years: 11,
        scores: [1, 2, 3]
    },
    {
        id: 2,
        title: 'Back End Development',
        tech: 'Laravel, Express.js, Restify, Apigee, Spring Framework, RESTful API, Redis',
        years: 11,
        scores: [4, 5, 6, 7]
    },
    {
        id: 3,
        title: 'Database',
        tech: 'PostgreSQL, MySQL/MariaDB, MongoDB',
        years: 11,
        scores: [8, 9, 10, 11]
    },
    {
        id: 4,
        title: 'DevOps',
        tech: 'Git, GitHub, Amazon Web Services, Serena Dimensions, Fortify, WebSphere, Vagrant, Docker, Bamboo, Jenkins, Travis CI, Bitbucket Pipelines',
        years: 3,
        scores: [12, 13, 14]
    },
    {
        id: 5,
        title: 'Project Management',
        tech: 'Jira, ServiceNow, IBM Notes, Confluence',
        years: 5,
        scores: [15, 16, 17]
    }
]

export default function Skills() {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {skills.map((skill) => (
                    <li key={skill.id}>
                        <div className="block hover:bg-gray-50">
                            <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div className="truncate">
                                        <div className="flex text-sm">
                                            <p className="truncate font-medium text-indigo-600">{skill.title}</p>
                                        </div>
                                        <div className="flex text-xs">
                                            <p className="truncate font-small">{skill.tech}</p>
                                        </div>
                                        <div className="mt-2 flex">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                              aria-hidden="true"/>
                                                <p>
                                                    <time dateTime={skill.years}>{skill.years}</time>
                                                    years
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                                        <div className="flex -space-x-1 overflow-hidden">
                                            {skill.scores.map((score) => (
                                                <svg key={score} xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M4.5 12.75l6 6 9-13.5"/>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
