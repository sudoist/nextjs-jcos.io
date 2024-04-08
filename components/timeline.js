import {
    ArrowRightIcon,
    BuildingOffice2Icon,
    CheckIcon,
    HandThumbUpIcon, HomeIcon, HomeModernIcon,
    UserIcon,
    XMarkIcon
} from '@heroicons/react/20/solid'

const timeline = [
    {
        id: 9,
        company: 'STIE PTE LTD',
        title: 'Java Developer',
        type: 'Vendor',
        client: "Housing and Development Board",
        date: 'Nov 2022 - Present',
        icon: BuildingOffice2Icon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 8,
        company: 'Freelance',
        title: 'Full Stack Developer',
        type: '-',
        client: "",
        date: 'Dec 2020 - Nov 2022',
        icon: HomeIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 7,
        company: 'Asticom Technology Inc',
        title: 'Frontend Web Developer Lead',
        type: 'Vendor',
        client: "917Ventures",
        date: 'Jun 2020 - Nov 2020',
        icon: BuildingOffice2Icon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 6,
        company: 'Freelance',
        title: 'Full Stack Developer',
        type: '-',
        client: "",
        date: 'Feb 2020 - May 2020',
        icon: HomeIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 5,
        company: 'MicroSourcing',
        title: 'Full Stack Developer',
        type: 'Vendor',
        client: "Winled Oy Ltd",
        date: 'Jan 2019 - Feb 2020 ',
        icon: BuildingOffice2Icon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 4,
        company: 'RCG Global Services',
        title: 'Front End Web Developer',
        type: 'Vendor',
        client: "Walt Disney Parks and Resorts",
        date: 'Jun 2017 - Dec 2018',
        icon: BuildingOffice2Icon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        company: 'Freelance',
        title: 'Full Stack Developer',
        type: '-',
        client: "",
        date: 'Nov 2014 - Jun 2017',
        icon: HomeIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 2,
        company: 'Philippine National Bank',
        title: 'Senior Software Engineer',
        type: 'In-House',
        client: "",
        date: 'Feb 2012 - Nov 2014',
        icon: BuildingOffice2Icon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 1,
        company: 'Allied Banking Corporation',
        title: 'Junior Software Engineer',
        type: 'In-House',
        client: "",
        date: 'Jul 2010 - Feb 2012',
        icon: BuildingOffice2Icon,
        iconBackground: 'bg-blue-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="flow-root">
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                  <span
                      className={classNames(
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {event.company}{' '}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {event.title}{' '}
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>{event.date}</time>
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
