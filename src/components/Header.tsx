'use client'
import { useState } from 'react'
import LangBtn from './LangBtn'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import banner from '@/assets/img/academy_banner.webp'

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
    label: "Biz kimik?",
    link: "/"
  },
  {
    label: "Bizimlə əlaqə",
    link: "/"
  },
]

const socials = [
  {
    link: "",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.50033 1.66699H13.5003C16.167 1.66699 18.3337 3.83366 18.3337 6.50033V13.5003C18.3337 14.7822 17.8244 16.0116 16.918 16.918C16.0116 17.8244 14.7822 18.3337 13.5003 18.3337H6.50033C3.83366 18.3337 1.66699 16.167 1.66699 13.5003V6.50033C1.66699 5.21845 2.17622 3.98907 3.08264 3.08264C3.98907 2.17622 5.21845 1.66699 6.50033 1.66699ZM6.33366 3.33366C5.53801 3.33366 4.77495 3.64973 4.21234 4.21234C3.64973 4.77495 3.33366 5.53801 3.33366 6.33366V13.667C3.33366 15.3253 4.67533 16.667 6.33366 16.667H13.667C14.4626 16.667 15.2257 16.3509 15.7883 15.7883C16.3509 15.2257 16.667 14.4626 16.667 13.667V6.33366C16.667 4.67533 15.3253 3.33366 13.667 3.33366H6.33366ZM14.3753 4.58366C14.6516 4.58366 14.9165 4.69341 15.1119 4.88876C15.3072 5.08411 15.417 5.34906 15.417 5.62533C15.417 5.90159 15.3072 6.16654 15.1119 6.3619C14.9165 6.55725 14.6516 6.66699 14.3753 6.66699C14.0991 6.66699 13.8341 6.55725 13.6388 6.3619C13.4434 6.16654 13.3337 5.90159 13.3337 5.62533C13.3337 5.34906 13.4434 5.08411 13.6388 4.88876C13.8341 4.69341 14.0991 4.58366 14.3753 4.58366ZM10.0003 5.83366C11.1054 5.83366 12.1652 6.27265 12.9466 7.05405C13.728 7.83545 14.167 8.89526 14.167 10.0003C14.167 11.1054 13.728 12.1652 12.9466 12.9466C12.1652 13.728 11.1054 14.167 10.0003 14.167C8.89526 14.167 7.83545 13.728 7.05405 12.9466C6.27265 12.1652 5.83366 11.1054 5.83366 10.0003C5.83366 8.89526 6.27265 7.83545 7.05405 7.05405C7.83545 6.27265 8.89526 5.83366 10.0003 5.83366ZM10.0003 7.50033C9.33728 7.50033 8.7014 7.76372 8.23256 8.23256C7.76372 8.7014 7.50033 9.33728 7.50033 10.0003C7.50033 10.6634 7.76372 11.2993 8.23256 11.7681C8.7014 12.2369 9.33728 12.5003 10.0003 12.5003C10.6634 12.5003 11.2993 12.2369 11.7681 11.7681C12.2369 11.2993 12.5003 10.6634 12.5003 10.0003C12.5003 9.33728 12.2369 8.7014 11.7681 8.23256C11.2993 7.76372 10.6634 7.50033 10.0003 7.50033Z" fill="#AFAFAF"></path></svg>
  },
  {
    link: "",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.78329 4.16665C5.78306 4.60867 5.60726 5.03251 5.29454 5.34491C4.98182 5.65732 4.55781 5.8327 4.11578 5.83248C3.67376 5.83226 3.24992 5.65645 2.93752 5.34373C2.62511 5.03102 2.44973 4.60701 2.44995 4.16498C2.45017 3.72295 2.62598 3.29912 2.9387 2.98671C3.25141 2.67431 3.67542 2.49892 4.11745 2.49915C4.55948 2.49937 4.98331 2.67517 5.29572 2.98789C5.60812 3.30061 5.78351 3.72462 5.78329 4.16665ZM5.83329 7.06665H2.49995V17.5H5.83329V7.06665ZM11.1 7.06665H7.78329V17.5H11.0666V12.025C11.0666 8.97498 15.0416 8.69165 15.0416 12.025V17.5H18.3333V10.8916C18.3333 5.74998 12.45 5.94165 11.0666 8.46665L11.1 7.06665Z" fill="#AFAFAF"></path></svg>
  },

]
const socialsDeskop = [
  {
    link: "",
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.04121 1H16.4412C19.6412 1 22.2412 3.6 22.2412 6.8V15.2C22.2412 16.7383 21.6301 18.2135 20.5424 19.3012C19.4547 20.3889 17.9795 21 16.4412 21H8.04121C4.84121 21 2.24121 18.4 2.24121 15.2V6.8C2.24121 5.26174 2.85228 3.78649 3.93999 2.69878C5.0277 1.61107 6.50295 1 8.04121 1ZM7.84121 3C6.88643 3 5.97076 3.37928 5.29563 4.05442C4.6205 4.72955 4.24121 5.64522 4.24121 6.6V15.4C4.24121 17.39 5.85121 19 7.84121 19H16.6412C17.596 19 18.5117 18.6207 19.1868 17.9456C19.8619 17.2705 20.2412 16.3548 20.2412 15.4V6.6C20.2412 4.61 18.6312 3 16.6412 3H7.84121ZM17.4912 4.5C17.8227 4.5 18.1407 4.6317 18.3751 4.86612C18.6095 5.10054 18.7412 5.41848 18.7412 5.75C18.7412 6.08152 18.6095 6.39946 18.3751 6.63388C18.1407 6.8683 17.8227 7 17.4912 7C17.1597 7 16.8417 6.8683 16.6073 6.63388C16.3729 6.39946 16.2412 6.08152 16.2412 5.75C16.2412 5.41848 16.3729 5.10054 16.6073 4.86612C16.8417 4.6317 17.1597 4.5 17.4912 4.5ZM12.2412 6C13.5673 6 14.8391 6.52678 15.7767 7.46447C16.7144 8.40215 17.2412 9.67392 17.2412 11C17.2412 12.3261 16.7144 13.5979 15.7767 14.5355C14.8391 15.4732 13.5673 16 12.2412 16C10.9151 16 9.64336 15.4732 8.70568 14.5355C7.76799 13.5979 7.24121 12.3261 7.24121 11C7.24121 9.67392 7.76799 8.40215 8.70568 7.46447C9.64336 6.52678 10.9151 6 12.2412 6ZM12.2412 8C11.4456 8 10.6825 8.31607 10.1199 8.87868C9.55728 9.44129 9.24121 10.2043 9.24121 11C9.24121 11.7956 9.55728 12.5587 10.1199 13.1213C10.6825 13.6839 11.4456 14 12.2412 14C13.0369 14 13.7999 13.6839 14.3625 13.1213C14.9251 12.5587 15.2412 11.7956 15.2412 11C15.2412 10.2043 14.9251 9.44129 14.3625 8.87868C13.7999 8.31607 13.0369 8 12.2412 8Z" fill="black"></path></svg>
  },
  {
    link: "",
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18066 3.00002C7.1804 3.53046 6.96943 4.03906 6.59417 4.41394C6.21891 4.78883 5.7101 4.99929 5.17966 4.99902C4.64923 4.99876 4.14063 4.78779 3.76574 4.41253C3.39086 4.03727 3.1804 3.52846 3.18066 2.99802C3.18093 2.46759 3.3919 1.95899 3.76716 1.5841C4.14242 1.20922 4.65123 0.998758 5.18166 0.999024C5.7121 0.999289 6.2207 1.21026 6.59559 1.58552C6.97047 1.96078 7.18093 2.46959 7.18066 3.00002ZM7.24066 6.48002H3.24066V19H7.24066V6.48002ZM13.5607 6.48002H9.58066V19H13.5207V12.43C13.5207 8.77002 18.2907 8.43002 18.2907 12.43V19H22.2407V11.07C22.2407 4.90002 15.1807 5.13002 13.5207 8.16002L13.5607 6.48002Z" fill="black"></path></svg>
  },
  {
    link: "",
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8414 3.82C16.1578 3.03962 15.7811 2.03743 15.7814 1H12.6914V13.4C12.6675 14.071 12.3842 14.7066 11.9011 15.1729C11.418 15.6393 10.7728 15.8999 10.1014 15.9C8.68137 15.9 7.50137 14.74 7.50137 13.3C7.50137 11.58 9.16137 10.29 10.8714 10.82V7.66C7.42137 7.2 4.40137 9.88 4.40137 13.3C4.40137 16.63 7.16137 19 10.0914 19C13.2314 19 15.7814 16.45 15.7814 13.3V7.01C17.0344 7.90985 18.5387 8.39265 20.0814 8.39V5.3C20.0814 5.3 18.2014 5.39 16.8414 3.82Z" fill="black"></path></svg>
  },

]

const Header = () => {

  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className='relative'>
      <div className="innerHeader w-full py-4 mtb:pt-8 mtb:pb-0 fixed mtb:static top-0 left-0 z-100  bg-white">
        <div className="container flex items-center justify-between mtb:gap-8">
          <div className="logo">
            <Link href={'/'}>
              <Logo className='w-[158px]' />
            </Link>
          </div>
          <div className="mobile_right flex gap-2 mtb:hidden" >
            <LangBtn />
            <div onClick={() => setIsMobileOpen((prev) => !prev)} className="hamburger py-[2px] px-2 bg-primary rounded-[8px]">
              <AnimatedHamburger isOpen={isMobileOpen} />
            </div>
          </div>
          <div className="hidden mtb:flex items-center justify-between bg-gray-light flex-1 py-[0.75em] px-[1.25em] xl:py-[0.875em] xl:px-[1.75em] rounded-[16px]">
            <nav className=' flex items-center '>
              <ul className='flex items-center gap-4 xl:gap-[30px] font-dewi'>
                {routes.slice(0, -1).map(({ label, link }, index) => (
                  <li key={label + index}>
                    <Link href={link}>
                      <span className='text-[calc(1rem_-_1px)] mtb:text-[1rem]'>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="right flex xl:gap-10">
              <div className="deskopSocials hidden xl:flex items-center gap-[52px] overflow-hidden">
                {
                  socialsDeskop.map(({ link, svg }, index) => (
                    <div key={"Socials" + index} className="socialsDeskopIcon relative after:absolute after:-right-[26px] after:h-full after:w-[1px] after:bg-[#727272] after:top-0">
                      <Link
                        className=''
                        target='_blank' href={link}>
                        {svg}
                      </Link>
                    </div>
                  ))
                }
              </div>
              <div className=" flex items-center gap-3">
                <ContactUs />
                <LangBtn />
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className={`mobileNav ${!isMobileOpen && 'hidden'} mtb:hidden fixed top-0 left-0 z-90 w-full h-screen pt-30 pb-6 bg-white`}>
        <div className="container h-full flex flex-col justify-between">
          <div className="top">
            <nav className='flex flex-col '>
              <ul className='flex flex-col gap-3 md:gap-4 mtb:gap-5'>
                {routes.map(({ label, link }, index) => (
                  <li key={label + index}>
                    <Link href={link}>
                      <span
                        className='font-grotesk text-[1.5rem] md:text-[1.75rem] font-medium'
                      >{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

            </nav>
          </div>
          <div className="bottom">
            <p className="text-gray-hard text-[1.25rem] mb-4 font-neue">
              Bizi izləyin
            </p>
            <div className="socials mb-[1.75em] flex gap-2">
              {
                socials.map(({ link, svg }, index) => (
                  <div key={"Socials" + index} className="socialIcon w-12 aspect-square flex items-center justify-center border border-gray-light rounded-[8px] overflow-hidden">
                    <Link
                      className='w-full h-full bg-white flex items-center justify-center'
                      target='_blank' href={link}>
                      {svg}
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className="banner">
              <div className="imageContainer relative w-full">
                <Image src={banner}
                  className='w-full h-full object-cover'
                  alt='Banner Image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


const ContactUs = () => (
  <Link href={""} className='bg-primary rounded-[8px]'>
    <button className=' py-[0.375em] px-[1.25em] xl:px-[1.5em]'>
      <span className=' leading-1.5 font-dewi'>Bizimlə əlaqə</span>
    </button>
  </Link>
)

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 100 100"
      className="cursor-pointer"
    >
      <path
        className={`transition-[stroke-dashoffset] duration-500 ease-in-out origin-center  ${
          isOpen ? "" : ""
        }`}
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        stroke="black"
        strokeWidth="6"
        fill="none"
        strokeDasharray="60 140"
        strokeDashoffset={isOpen ? "-140" : "0"}
      />
      <path
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-full " : "translate-x-0"
        }`}
        d="M 20,50 H 80"
        stroke="black"
        strokeWidth="6"
        fill="none"
      />
      <path
        className={`transition-[stroke-dashoffset] duration-500 ease-in-out origin-center ${
          isOpen ? "" : ""
        }`}
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        stroke="black"
        strokeWidth="6"
        fill="none"
        strokeDasharray="60 140"
        strokeDashoffset={isOpen ? "-140" : "0"}
      />
    </svg>
  );
};