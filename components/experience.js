import React from "react";
import {
    ArrowRightIcon,
    BuildingOffice2Icon,
    CheckIcon,
    HandThumbUpIcon, HomeIcon, HomeModernIcon,
    UserIcon,
    XMarkIcon
} from '@heroicons/react/20/solid'

const icons = {
    BuildingOffice2Icon: BuildingOffice2Icon,
    HomeIcon: HomeIcon,
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Experience({experiences}) {
    return (
        <div className="flow-root">
            <ul role="list" className="-mb-8">

                {experiences.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== experiences.length - 1 ? (
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
                    {React.createElement(icons[event.icon], {className: "h-5 w-5 text-white"})}
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
