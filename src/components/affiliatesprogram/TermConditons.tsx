import React from 'react'
import Container from '../Conatianers/Container'

type Props = {
    termandcondition: any[]
}

const TermConditons = ({ termandcondition }: Props) => {
    return (
        <Container className='py-16 sm:py-16'>
            <h2 className="text-3xl font-poppins text-black md:text-4xl font-[600] mb-1 ">
                Term&condtions
            </h2>
            <div className="mt-4">
                <ul className="mt-1" style={{ listStyleType: "disc" }}>
                    {termandcondition?.map((term, index) => (
                        <li key={index} className="text-lg flex items-center gap-2 ">
                            <span className="font-semibold p-0 mr-1">{index + 1}. </span>
                            {term}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </Container>
    )
}

export default TermConditons