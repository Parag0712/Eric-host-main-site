import React from 'react'

type Props = {}

const Address = (props: Props) => {

    const locations = [
        {
            title: 'Bengaluru office',
            timings: 'Mon-Sat 9am to 5pm.',
            address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
        },
        {
            title: 'Head office',
            timings: 'Mon-Sat 9am to 5pm.',
            address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
        },
        {
            title: 'Karnataka office',
            timings: 'Mon-Sat 9am to 5pm.',
            address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
        },
    ]

    return (
        <>
            <div className="rounded-lg bg-primary text-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="py-20">
                        <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
                            <div className="space-y-4">
                                <p className="w-full text-4xl font-bold text-white">Our Offices</p>
                                <p className="w-full text-lg text-white">Find us at these locations.</p>
                            </div>
                            <div className="space-y-4 divide-y-2">
                                {locations.map((location) => (
                                    <div
                                        key={location.title}
                                        className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                                    >
                                        <p className="w-full text-xl font-semibold  text-white">{location.title}</p>
                                        <p className="w-full text-base  text-white">{location.timings}</p>
                                        <p className="text-sm font-semibold text-white">{location.address}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Address