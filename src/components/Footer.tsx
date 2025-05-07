import Link from 'next/link'
import React from 'react'
import microsoft from '@/assets/icons/microsoft.svg'
import Image from 'next/image'

const routes = [
    {
        label: "Xidmətlərimiz",
        link: "/services"
    },
    {
        label: "Layihələr",
        link: "/"
    },
    {
        label: "Analitika",
        link: "/"
    },
    {
        label: "Bloq",
        link: "/"
    },
    {
        label: "Haqqımızda",
        link: "/"
    },
]

const socials = [
    {
        link: "",
        svg: <svg className='w-[18px] h-[18px] vs:w-[24px] vs:h-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.04121 1H16.4412C19.6412 1 22.2412 3.6 22.2412 6.8V15.2C22.2412 16.7383 21.6301 18.2135 20.5424 19.3012C19.4547 20.3889 17.9795 21 16.4412 21H8.04121C4.84121 21 2.24121 18.4 2.24121 15.2V6.8C2.24121 5.26174 2.85228 3.78649 3.93999 2.69878C5.0277 1.61107 6.50295 1 8.04121 1ZM7.84121 3C6.88643 3 5.97076 3.37928 5.29563 4.05442C4.6205 4.72955 4.24121 5.64522 4.24121 6.6V15.4C4.24121 17.39 5.85121 19 7.84121 19H16.6412C17.596 19 18.5117 18.6207 19.1868 17.9456C19.8619 17.2705 20.2412 16.3548 20.2412 15.4V6.6C20.2412 4.61 18.6312 3 16.6412 3H7.84121ZM17.4912 4.5C17.8227 4.5 18.1407 4.6317 18.3751 4.86612C18.6095 5.10054 18.7412 5.41848 18.7412 5.75C18.7412 6.08152 18.6095 6.39946 18.3751 6.63388C18.1407 6.8683 17.8227 7 17.4912 7C17.1597 7 16.8417 6.8683 16.6073 6.63388C16.3729 6.39946 16.2412 6.08152 16.2412 5.75C16.2412 5.41848 16.3729 5.10054 16.6073 4.86612C16.8417 4.6317 17.1597 4.5 17.4912 4.5ZM12.2412 6C13.5673 6 14.8391 6.52678 15.7767 7.46447C16.7144 8.40215 17.2412 9.67392 17.2412 11C17.2412 12.3261 16.7144 13.5979 15.7767 14.5355C14.8391 15.4732 13.5673 16 12.2412 16C10.9151 16 9.64336 15.4732 8.70568 14.5355C7.76799 13.5979 7.24121 12.3261 7.24121 11C7.24121 9.67392 7.76799 8.40215 8.70568 7.46447C9.64336 6.52678 10.9151 6 12.2412 6ZM12.2412 8C11.4456 8 10.6825 8.31607 10.1199 8.87868C9.55728 9.44129 9.24121 10.2043 9.24121 11C9.24121 11.7956 9.55728 12.5587 10.1199 13.1213C10.6825 13.6839 11.4456 14 12.2412 14C13.0369 14 13.7999 13.6839 14.3625 13.1213C14.9251 12.5587 15.2412 11.7956 15.2412 11C15.2412 10.2043 14.9251 9.44129 14.3625 8.87868C13.7999 8.31607 13.0369 8 12.2412 8Z" fill="white"></path></svg>
    },
    {
        link: "",
        svg: <svg className='w-[18px] h-[18px] vs:w-[24px] vs:h-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18066 3.00002C7.1804 3.53046 6.96943 4.03906 6.59417 4.41394C6.21891 4.78883 5.7101 4.99929 5.17966 4.99902C4.64923 4.99876 4.14063 4.78779 3.76574 4.41253C3.39086 4.03727 3.1804 3.52846 3.18066 2.99802C3.18093 2.46759 3.3919 1.95899 3.76716 1.5841C4.14242 1.20922 4.65123 0.998758 5.18166 0.999024C5.7121 0.999289 6.2207 1.21026 6.59559 1.58552C6.97047 1.96078 7.18093 2.46959 7.18066 3.00002ZM7.24066 6.48002H3.24066V19H7.24066V6.48002ZM13.5607 6.48002H9.58066V19H13.5207V12.43C13.5207 8.77002 18.2907 8.43002 18.2907 12.43V19H22.2407V11.07C22.2407 4.90002 15.1807 5.13002 13.5207 8.16002L13.5607 6.48002Z" fill="white"></path></svg>
    },
    {
        link: "",
        svg: <svg className='w-[18px] h-[18px] vs:w-[24px] vs:h-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8414 3.82C16.1578 3.03962 15.7811 2.03743 15.7814 1H12.6914V13.4C12.6675 14.071 12.3842 14.7066 11.9011 15.1729C11.418 15.6393 10.7728 15.8999 10.1014 15.9C8.68137 15.9 7.50137 14.74 7.50137 13.3C7.50137 11.58 9.16137 10.29 10.8714 10.82V7.66C7.42137 7.2 4.40137 9.88 4.40137 13.3C4.40137 16.63 7.16137 19 10.0914 19C13.2314 19 15.7814 16.45 15.7814 13.3V7.01C17.0344 7.90985 18.5387 8.39265 20.0814 8.39V5.3C20.0814 5.3 18.2014 5.39 16.8414 3.82Z" fill="white"></path></svg>
    },

]

const countries = [
    {
        name: "Azerbaijan",
        loc: "Azure Business Center 8 Noyabr, 15 Bakı, Azərbaycan AZ1010",
    },
    {
        name: "Canada",
        loc: "Edmonton, Alberta",
    },
    {
        name: "Georgia",
        loc: "Tbilisi, Gürcüstan",
    },
];

const footerContact=[
    {
        label:'+994 12 488 66 54',
        link:'tel:+994 12 488 66 54'
    },
    {
        label:'+994 77 613 13 17',
        link:'tel:+994 77 613 13 17'
    },
    {
        label:'info@birainy.com',
        link:'mailto:info@birainy.com'
    },
]


const Footer = () => {
    return (
        <footer className='bg-black text-white'>
            <div className="container">
                <div className="top flex flex-col mtb:flex-row mtb:items-end mtb:justify-between gap-12 py-8 vs:pb-16">
                    <div className="left">
                        <h3 className='font-neue text-[1.75rem] vs:text-[2.5rem] md:text-[3rem] max-w-[260px] vs:max-w-[340px]'>Bizimlə indi əlaqəyə keçin</h3>
                        <nav className=''>
                            <ul className='flex flex-col md:flex-row gap-4 vs:gap-5 md:gap-8 font-grotesk font-semibold mt-8'>
                                {routes.map(({ label, link }, index) => (
                                    <li key={label + index}>
                                        <Link href={link}>
                                            <span className='text-[18px]'>{label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="right">
                        <p className="title text-[1rem] vs:text-[18px] font-grotesk mtb:text-end">
                            Bizi izləyin
                        </p>
                        <div className="socials flex mt-6 gap-4">
                            {socials.map(({ link, svg }, index) => (
                                <Link key={link + index} href={link} className="h-12 w-12 vs:h-16 vs:w-16  rounded-full border border-white flex items-center justify-center">
                                    {svg}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mid grid grid-cols-1 vs:grid-cols-2 xl:grid-cols-3 gap-12 pb-12">
                    {
                        countries.map(({ name, loc }, index) => (
                            <div key={name + index} className="">
                                <p className='font-grotesk text-[1rem] md:text-[1.25rem]' >{name}</p>
                                <p className='font-grotesk text-[0.875rem] md:text-[1rem] mt-4 mb-5 text-[rgba(255,255,255,.64)]' >{loc}</p>
                            </div>
                        ))
                    }

                </div>
                <div className="bottom border-t border-white flex flex-col mtb:flex-row mtb:items-center mtb:justify-between gap-6 py-8">
                    <div className=" flex">
                        <VerificationIcon />
                        <span className=' ml-5 mr-3 flex items-center font-neue whitespace-nowrap'>Partner with</span>
                        <div className="logoContainer">
                            <Image
                                src={microsoft}
                                alt='MIcrosift Logo'
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center  gap-4 vs:gap-8">
                        {footerContact.map(({label,link},index)=>(
                            <Link 
                            key={label+index}
                            className='font-grotesk font-semibold text-[calc(15rem_/_16)] vs:!text-[1.125rem]'
                            href={link}>{label}</Link>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer

const VerificationIcon = () => (
    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.8787 1.15981C19.174 0.84401 19.6749 0.84401 19.9701 1.15981L24.2542 5.74167C24.4171 5.91584 24.6533 6.00181 24.89 5.97307L31.117 5.21694C31.5462 5.16482 31.9299 5.48677 31.9531 5.91849L32.2897 12.1822C32.3025 12.4203 32.4282 12.638 32.628 12.7681L37.8842 16.1915C38.2465 16.4275 38.3335 16.9207 38.0737 17.2663L34.3054 22.281C34.1622 22.4716 34.1185 22.7192 34.1879 22.9473L36.0139 28.9484C36.1397 29.362 35.8893 29.7958 35.4682 29.8936L29.3581 31.3128C29.1258 31.3668 28.9333 31.5283 28.8398 31.7477L26.3811 37.5185C26.2117 37.9162 25.741 38.0875 25.3556 37.8918L19.7627 35.0515C19.5501 34.9435 19.2987 34.9435 19.0861 35.0515L13.4933 37.8918C13.1078 38.0875 12.6372 37.9162 12.4677 37.5185L10.009 31.7477C9.91557 31.5283 9.72301 31.3668 9.49075 31.3128L3.38067 29.8936C2.95955 29.7958 2.70912 29.362 2.83497 28.9484L4.66092 22.9473C4.73033 22.7192 4.68668 22.4716 4.54343 22.281L0.775107 17.2663C0.515383 16.9207 0.602358 16.4275 0.96463 16.1915L6.22082 12.7681C6.42062 12.638 6.5463 12.4203 6.5591 12.1822L6.89576 5.91849C6.91896 5.48677 7.30265 5.16482 7.73183 5.21694L13.9588 5.97307C14.1955 6.00181 14.4317 5.91584 14.5946 5.74167L18.8787 1.15981Z" fill="#F7D000"></path><path d="M13.4478 20.0001L17.9303 24.4827L25.4012 15.5176" stroke="black" strokeWidth="1.49419" strokeLinecap="round" strokeLinejoin="round"></path></svg>
)