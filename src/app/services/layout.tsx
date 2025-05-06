import Link from "next/link";


const asideTabs = [
    {
        catTitle: "Proqram Təminatı",
        id: 1,
        subCats: [
            {
                sCatTitle: "Proqram Təminatı",
                tabid: 1
            },
            {
                sCatTitle: "Sürətli Axtarış Sistemi",
                tabid: 2
            },
            {
                sCatTitle: "CRM və ERP",
                tabid: 3
            },
            {
                sCatTitle: "Mobil tətbiqlər",
                tabid: 4
            },
        ]
    },
    {
        catTitle: "Saytların yaradılması",
        id: 2,
        subCats: []
    },
    {
        catTitle: "Oyun Təminatı",
        id: 3,
        subCats: [
            {
                sCatTitle: "Oyun Təminatı",
                tabid: 1
            },
            {
                sCatTitle: "Stend və VR oyunları",
                tabid: 2
            },
            {
                sCatTitle: "Veb oyunlar",
                tabid: 3
            },
            {
                sCatTitle: "VR simulyatorlar",
                tabid: 4
            },
            {
                sCatTitle: "Oyun monitoru kirayəsi",
                tabid: 5
            },
        ]
    },
    {
        catTitle: "Data Analitikası",
        id: 4,
        subCats: [
            {
                sCatTitle: "Data Analitikası",
                tabid: 1
            },
            {
                sCatTitle: "Maliyyə təhlili",
                tabid: 2
            },
            {
                sCatTitle: "İnsan Resurslarının təhlili",
                tabid: 3
            },
            {
                sCatTitle: "Optimizasiya təhlili",
                tabid: 4
            },
            {
                sCatTitle: "Satınalma təhlili",
                tabid: 5
            },
            {
                sCatTitle: "Əsas Performans Göstəriciləri (KPI) təhlili",
                tabid: 6
            },
            {
                sCatTitle: "1C proqramı ilə inteqrasiya",
                tabid: 7
            },
            {
                sCatTitle: "SƏTƏM təhlili",
                tabid: 8
            },
            {
                sCatTitle: "Sosial Media",
                tabid: 9
            },
            {
                sCatTitle: "Restoranlar",
                tabid: 10
            },
        ]
    },

]


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="mt mt-[72px] mtb:mt-0">
            <div className="container">
                <div className="title w-full inline-flex flex-col mt-[24px] mb-[16px] vs:mt-[48px] vs:mb-[24px] mtb:mt-[72px] mtb:mb-[48px]">
                    <Star />
                    <div className="information mt-[16px] lg:mt-[32px] pb-[32px] border-b border-b-[rgba(0,0,0,.64)] flex justify-between items-end">
                        <div className="left flex flex-col gap-4 max-w-[780px] mtb:gap-8">
                            <h1 className='text-[36px] vs:text-[48px] md:text-[64px] mtb:!text-[72px] font-medium leading-[1.2] font-neue'>Xidmətlərimiz</h1>
                            <p className="text-[14px] vs:text-[1rem] font-grotesk text-[rgba(0,0,0,.72)] ">Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.</p>
                        </div>
                        <div className="orderBtnWrap hidden mtb:inline">
                            <Link href={""} className="orederBtn group relative bg-dark rounded-full inline-flex items-center justify-center w-[136px] h-[136px]">
                                <CircularText />
                                <Line className="-rotate-45 group-hover:rotate-0 transform duration-300" />
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="bottom flex flex-col mtb:flex-row gap-6 items-start mtb:gap-12">
                    <div className="left bg-red-400 flex-[1] w-full">
                        <aside>
                            <div className="cats flex flex-col gap-3">
                                {
                                    asideTabs.map(({ catTitle, id, subCats }, index) => {
                                        const isSub = subCats?.length != 0

                                        return (
                                            <div key={catTitle + index} className="cat bg-gray-light rounded-[12px] overflow-hidden">
                                                <Link href={`/services?id=${id}`} className="label py-[20px] px-[28px] flex items-center justify-between ">
                                                    <span>{catTitle}</span>
                                                    {isSub && <span>+</span>}

                                                </Link>
                                                {
                                                    isSub && (
                                                        <ul className="py-[20px] px-[28px] flex flex-col gap-4 border-t-2 border-t-[rgba(0,0,0,.16)]">
                                                            {
                                                                subCats.map(({ sCatTitle,tabid }, index) => (
                                                                    <li key={sCatTitle + index}>
                                                                        <Link href={`/services?id=${id}&tab=${tabid}`} >
                                                                            <span className="text-[rgba(0,0,0,.48)]">
                                                                                {sCatTitle}
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    )

                                                }

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </aside>
                    </div>
                    <div className="right bg-amber-400 flex-2">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Star = () => (
    <div className="w-[34px] h-[36.5px] vs:w-[48px] vs:h-[50.4px]">
        <svg className='w-full h-full' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.25 23.25H5.25M23.25 5.25V41.25M12.75 33.75L33.75 12.75M33.75 33.75L12.75 12.75" stroke="black" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </div>
)

const CircularText = () => (
    <svg
        viewBox="0 0 100 100" width="100" height="100"
        className="
      absolute top-0 left-0
      w-full h-full
      animate-[spin_12s_linear_infinite]
      group-hover:[animation-play-state:paused]
    "
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

const Line = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="58" height="46" viewBox="0 0 58 46" fill="none">
        <path d="M2.1123 22.8907L55.5822 22.8907" stroke="#F7D000" strokeWidth="2.91654" strokeLinecap="round" />
        <path d="M34.1914 1.50208C34.1914 13.3143 43.7671 22.89 55.5794 22.89C43.7671 22.89 34.1914 32.4657 34.1914 44.278" stroke="#F7D000" strokeWidth="2.91654" strokeLinecap="round" />
    </svg>
)

