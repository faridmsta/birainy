export const Minus = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6.667 17.333V14.667H25.333V17.333H6.667Z" fill="#1C1B1F" />
    </svg>
);

export const Plus = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M14.667 25.333V17.333H6.667V14.667H14.667V6.667H17.334V14.667H25.334V17.333H17.334V25.333H14.667Z" fill="#1C1B1F" />
    </svg>
);

export const Line = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="58" height="46" viewBox="0 0 58 46" fill="none">
        <path d="M2.1123 22.8907L55.5822 22.8907" stroke="#F7D000" strokeWidth="2.91654" strokeLinecap="round" />
        <path d="M34.1914 1.50208C34.1914 13.3143 43.7671 22.89 55.5794 22.89C43.7671 22.89 34.1914 32.4657 34.1914 44.278" stroke="#F7D000" strokeWidth="2.91654" strokeLinecap="round" />
    </svg>
)

export const CircularText = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100" width="100" height="100"
        className={className}
    >
        <defs>
            <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
        </defs>
        <text fontSize="9" fill="white">
            <textPath xlinkHref="#circle">
                SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡
            </textPath>
        </text>
    </svg>
);

export const Star = ({ className }: { className?: string }) => (
    <div className={className}>
        <svg className='w-full h-full' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.25 23.25H5.25M23.25 5.25V41.25M12.75 33.75L33.75 12.75M33.75 33.75L12.75 12.75" stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </div>
)
