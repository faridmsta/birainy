'use client';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { asideTabs } from './asideTabs'
import { Minus, Plus, Line, CircularText, Star } from '@/assets/icons/icons'




function AsideMenu() {
    const searchParams = useSearchParams();
    const queryId = Number(searchParams.get('id'));
    const queryTab = Number(searchParams.get('tab') || 1);

    return (
        <aside >
            <div className="cats flex flex-col gap-3">
                {
                    asideTabs.map(({ catTitle, id, subCats }, index) => {
                        const isSub = subCats?.length != 0

                        return (
                            <div key={catTitle + index} className={`cat bg-gray-light rounded-[12px] overflow-hidden font-neue transition-all duration-300 border border-transparent hover:border-primary `}>
                                <Link href={`/services?id=${id}`} className="label py-[20px] px-[28px] flex items-center justify-between text-[20px] lg:text-[24px]">
                                    <span className={`text-dark whitespace-nowrap`} >{catTitle}</span>
                                    {isSub && (
                                        (queryId === id) ? <Minus /> : <Plus />
                                    )}

                                </Link>
                                {
                                    isSub && (
                                        <ul
                                            className={`${queryId === id
                                                ? 'py-[20px] px-[28px] flex flex-col gap-4 border-t-2 border-t-[rgba(0,0,0,.16)]'
                                                : 'max-h-0 p-0 overflow-hidden'
                                                }`}>
                                            {
                                                subCats.map(({ sCatTitle, tabid }, index) => (
                                                    <li key={sCatTitle + index}>
                                                        <Link href={`/services?id=${id}&tab=${tabid}`} >
                                                            <span className={`text-[rgba(0,0,0,.48)] text-[20px] ${queryTab === tabid && "text-dark"}`}>
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
    )
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <section className="mt mt-[72px] mtb:mt-0 mb-20">
            <div className="container">
                <div className="title w-full inline-flex flex-col mt-[24px] mb-[16px] vs:mt-[48px] vs:mb-[24px] mtb:mt-[72px] mtb:mb-[48px]">
                    <Star className="w-[34px] h-[36.5px] vs:w-[48px] vs:h-[50.4px]" />
                    <div className="information mt-[16px] lg:mt-[32px] pb-[32px] border-b border-b-[rgba(0,0,0,.64)] flex justify-between items-end">
                        <div className="left flex flex-col gap-4 max-w-[780px] mtb:gap-8">
                            <h1 className='text-[36px] vs:text-[48px] md:text-[64px] mtb:!text-[72px] font-medium leading-[1.2] font-neue'>Xidmətlərimiz</h1>
                            <p className="text-[14px] vs:text-[1rem] font-grotesk text-[rgba(0,0,0,.72)] ">Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.</p>
                        </div>
                        <div className="orderBtnWrap hidden mtb:inline">
                            <Link href={"/contact"} className="orederBtn group relative bg-dark rounded-full inline-flex items-center justify-center w-[136px] h-[136px]">
                                <CircularText
                                    className="
                                absolute top-0 left-0
                                w-full h-full
                                animate-[spin_10s_linear_infinite]
                                group-hover:[animation-play-state:paused]
                              "
                                />
                                <Line className="-rotate-30 group-hover:rotate-0 transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bottom flex flex-col mtb:flex-row gap-6 items-start mtb:gap-12">
                    <div className="left flex-[4.3] w-full mtb:sticky top-[24px]">
                        <Suspense fallback={<p>Loading...</p>}>
                            <AsideMenu />
                        </Suspense >
                    </div>
                    <div className="right flex-8 w-full">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}






