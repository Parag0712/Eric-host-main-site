"use client"
import React from 'react'
import { email, phone } from '../../../data/Navbar/link.json'
type Props = {}
import { term_condition as term } from '../../../data/Term&Condtions/data'
const term_condition = (props: Props) => {
  const myFunction = () => {

  }

  const keys = Object.keys(term);
  return (
    <section>
      <div className='w-full'>

        <div
          className="w-full bg-cover bg-center bg-no-repeat pt-28 lg:pb-24 pb-14 px-12 xl:px-20 bg-primary font-poppins"

        >
          <h1 className="mb-8 text-center text-white font-bold font-manrope leading-tight lg:text-5xl text-3xl">
            Terms of Use
          </h1>
          <p
            className="text-white text-lg leading-8 text-center font-normal px-4"
          >
            We're here to help Reach us by phone at <span className='font-semibold'>{phone}</span> or email us at <span className='font-semibold'>{email}</span> for any queries or concerns.
          </p>
        </div>
        <section className="max-w-[1400px] mx-auto  w-full relative overflow-hidden lg:py-28 py-16">
          <div className="px-12 xl:px-20">
            <div className="flex flex-col md:flex-row w-full gap-8">


              {/*Here m y right side content */}
              <div className="w-full tab-pane max-md:px-4">
                <h2 className="font-manrope font-bold lg:text-4xl text-3xl text-gray-900 mb-5">Terms of Use</h2>
                <div className="flex items-center gap-3 lg:mb-10 mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0054 8V12.5322C12.0054 12.8286 12.1369 13.1098 12.3645 13.2998L15 15.5M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-medium text-xl leading-8 text-indigo-600">Last updated: May 26, 2023</p>
                </div>
                <p className="font-normal text-lg leading-8 text-gray-500 lg:mb-10 mb-8">
                  These terms and conditions outline the rules and regulations for the use of Erichost's Website:-</p>
                <div>
                  {Object.entries(term).map(([key, value]) => (
                    <div key={key}>
                      <h5 className="font-manrope font-bold md:text-3xl text-2xl text-gray-900 mb-4">{key}</h5>
                      <ul className="ml-8 lg:mb-10 mb-8">
                        {value.map((item, index) => (
                          <li key={index} className="list-decimal font-normal text-lg text-gray-600 mt-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default term_condition