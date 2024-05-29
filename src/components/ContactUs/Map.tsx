import { address, email, phone } from '../../data/Navbar/link.json'

type Props = {}

const Map = (props: Props) => {
    return (
        <section className="bg-white dark:bg-gray-900" id='map'>
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center ">
                    <p className="font-medium text-primary dark:text-indigo-400">Contact us</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">We’d love to hear from you</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">Chat to our friendly team.</p>
                </div>

                <iframe  className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14233.463516407379!2d81.059901!3d26.891881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6fd9c7abbc13%3A0x174d70fe3c3621c1!2sErichost!5e0!3m2!1sen!2sus!4v1716497601226!5m2!1sen!2sus" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
                        <div className="p-4 rounded-lg bg-indigo-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-indigo-500 rounded-lg bg-indigo-100/80 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Mail Us</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                            <p className="mt-2 text-sm text-indigo-500 dark:text-indigo-400">{email}</p>
                        </div>

                        <div className="p-4 rounded-lg bg-indigo-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-indigo-500 rounded-lg bg-indigo-100/80 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                            <p className="mt-2 text-sm text-indigo-500 dark:text-indigo-400">{address}</p>
                        </div>

                        <div className="p-4 rounded-lg bg-indigo-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-indigo-500 rounded-lg bg-indigo-100/80 dark:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">24/7 Support</p>
                            <p className="mt-2 text-sm text-indigo-500 dark:text-indigo-400">{phone}</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Map