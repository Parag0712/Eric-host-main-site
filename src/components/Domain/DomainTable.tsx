import React from 'react'
import Container from '../Conatianers/Container'

type Props = {}

const DomainTable = (props: Props) => {
    const domain = [
        {
            "extension": ".com",
            "popular": true,
            "register": 899.00,
            "renewal": 949.00,
            "transfer": 949.00
        },
        {
            "extension": ".info",
            "sale": true,
            "register": 499.00,
            "renewal": 1549.00,
            "transfer": 1549.00
        },
        {
            "extension": ".org",
            "register": 1199.00,
            "renewal": 1199.00,
            "transfer": 1199.00
        },
        {
            "extension": ".net",
            "register": 1199.00,
            "renewal": 1199.00,
            "transfer": 1199.00
        },
        {
            "extension": ".in",
            "register": 699.00,
            "renewal": 699.00,
            "transfer": 699.00
        },
        {
            "extension": ".xyz",
            "register": 199.00,
            "renewal": 1149.00,
            "transfer": 1149.00
        },
        {
            "extension": ".online",
            "sale": true,
            "register": 699.99,
            "renewal": 2425.99,
            "transfer": 2425.99
        },
        {
            "extension": ".live",
            "register": 372.99,
            "renewal": 1865.99,
            "transfer": 1865.99
        },
        {
            "extension": ".org.in",
            "register": 549.99,
            "renewal": 549.99,
            "transfer": 549.99
        },
        {
            "extension": ".io",
            "register": 4200.99,
            "renewal": 4573.99,
            "transfer": 4573.99
        },
        {
            "extension": ".us",
            "new": true,
            "register": 372.99,
            "renewal": 799.99,
            "transfer": 799.99
        }
    ]
    const TdStyle = {
        ThStyle: `w-1/6 min-w-[160px] border   py-2 px-3 text-lg font-medium text-white lg:py-4 lg:px-4`,
        TdStyle: `text-dark border-2   border-slate-300 bg-white dark:bg-dark-3  py-1 px-2 text-center text-base font-medium`,
        TdStyle2: `text-dark border-2  border-slate-300 bg-white dark:border-dark  py-1 px-2 text-center text-base font-medium`,
        TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
      }
    return (
        <Container className='max-w-[100px] dark:bg-dark py-20 lg:py-[120px]'>
            <div className='container'>
                <div className='flex flex-wrap -mx-4'>
                    <div className='w-full '>
                        <div className='max-w-full overflow-x-auto'>
                            <table className='w-full table-auto'>
                                <thead className='text-center bg-primary'>
                                    <tr>
                                        <th className={TdStyle.ThStyle}> Extension </th>
                                        <th className={TdStyle.ThStyle}> Register </th>
                                        <th className={TdStyle.ThStyle}> Renewal </th>
                                        <th className={TdStyle.ThStyle}> Transfer </th>
                                        <th className={TdStyle.ThStyle}> Action </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {domain.map(({ extension, register, renewal, transfer }, index) => (
                                        <tr key={index}>
                                            <td className={index % 2 === 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>{extension}</td>
                                            <td className={index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle}>{register}</td>
                                            <td className={index % 2 === 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>{renewal}</td>
                                            <td className={index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle}>{transfer}</td>
                                            <td className={index % 2 === 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                                                <a href='/#' className={TdStyle.TdButton}>
                                                    Register
                                                </a>
                                            </td>   
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default DomainTable