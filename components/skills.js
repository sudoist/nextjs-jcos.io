import {CalendarIcon, ChevronRightIcon} from '@heroicons/react/20/solid'

const skills = [
    {
        id: 1,
        title: 'Front End Development',
        tech: 'Tailwind CSS, Bootstrap, jQuery, Angular, Vue.js, React(This page)',
        years: 11,
        scores: [{}, {}, {}]
    },
    {
        id: 2,
        title: 'Back End Development',
        tech: 'Laravel, Express.js, Restify, Apigee, Spring Framework, RESTful API, Redis',
        years: 11,
        scores: [{}, {}, {}, {}]
    },
    {
        id: 3,
        title: 'Database',
        tech: 'PostgreSQL, MySQL/MariaDB, MongoDB',
        years: 11,
        scores: [{}, {}, {}, {}]
    },
    {
        id: 4,
        title: 'DevOps',
        tech: 'Git, GitHub, Amazon Web Services, Serena Dimensions, Fortify, WebSphere, Vagrant, Docker, Bamboo, Jenkins, Travis CI, Bitbucket Pipelines',
        years: 3,
        scores: [{}, {}, {}]
    },
    {
        id: 5,
        title: 'Project Management',
        tech: 'Jira, ServiceNow, IBM Notes, Confluence',
        years: 5,
        scores: [{}, {}, {}]
    }
]

const positions = [
    {
        id: 1,
        title: 'Back End Developer',
        department: 'Engineering',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
        applicants: [
            {
                name: 'Dries Vincent',
                email: 'dries.vincent@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Lindsay Walton',
                email: 'lindsay.walton@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Courtney Henry',
                email: 'courtney.henry@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Tom Cook',
                email: 'tom.cook@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
    {
        id: 2,
        title: 'Front End Developer',
        department: 'Engineering',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
        applicants: [
            {
                name: 'Whitney Francis',
                email: 'whitney.francis@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Leonard Krasner',
                email: 'leonard.krasner@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Floyd Miles',
                email: 'floyd.miles@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
    {
        id: 3,
        title: 'User Interface Designer',
        department: 'Design',
        closeDate: '2020-01-14',
        closeDateFull: 'January 14, 2020',
        applicants: [
            {
                name: 'Emily Selman',
                email: 'emily.selman@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Kristin Watson',
                email: 'kristin.watson@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                name: 'Emma Dorsey',
                email: 'emma.dorsey@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
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
                                                    <time dateTime={skill.years}>{skill.years}</time> years
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                                        <div className="flex -space-x-1 overflow-hidden">
                                            {skill.scores.map((score) => (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
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
