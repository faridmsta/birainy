'use client';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const asideTabs = [
    {
        catTitle: "Proqram Təminatı",
        id: 1,
        subCats: [
            { sCatTitle: "Proqram Təminatı", tabid: 1 },
            { sCatTitle: "Sürətli Axtarış Sistemi", tabid: 2 },
            { sCatTitle: "CRM və ERP", tabid: 3 },
            { sCatTitle: "Mobil tətbiqlər", tabid: 4 },
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
            { sCatTitle: "Oyun Təminatı", tabid: 1 },
            { sCatTitle: "Stend və VR oyunları", tabid: 2 },
            { sCatTitle: "Veb oyunlar", tabid: 3 },
            { sCatTitle: "VR simulyatorlar", tabid: 4 },
            { sCatTitle: "Oyun monitoru kirayəsi", tabid: 5 },
        ]
    },
    {
        catTitle: "Data Analitikası",
        id: 4,
        subCats: [
            { sCatTitle: "Data Analitikası", tabid: 1 },
            { sCatTitle: "Maliyyə təhlili", tabid: 2 },
            { sCatTitle: "İnsan Resurslarının təhlili", tabid: 3 },
            { sCatTitle: "Optimizasiya təhlili", tabid: 4 },
            { sCatTitle: "Satınalma təhlili", tabid: 5 },
            { sCatTitle: "Əsas Performans Göstəriciləri (KPI) təhlili", tabid: 6 },
            { sCatTitle: "1C proqramı ilə inteqrasiya", tabid: 7 },
            { sCatTitle: "SƏTƏM təhlili", tabid: 8 },
            { sCatTitle: "Satış/KPI", tabid: 9 },
            { sCatTitle: "Sosial Media", tabid: 10 },
            { sCatTitle: "Restoranlar", tabid: 11 },
        ]
    },
];

function AsideMenu() {
    const searchParams = useSearchParams();
    const queryId = Number(searchParams.get('id'));
    const queryTab = Number(searchParams.get('tab') || 1);

    return (
        <div className="cats flex flex-col gap-3">
            {asideTabs.map(({ catTitle, id, subCats }, index) => {
                const isSub = subCats?.length !== 0;

                return (
                    <div key={catTitle + index} className="cat bg-gray-light rounded-[12px] overflow-hidden font-neue transition-all duration-300 border border-transparent hover:border-primary">
                        <Link href={`/services?id=${id}`} className="label py-[20px] px-[28px] flex items-center justify-between text-[20px] lg:text-[24px]">
                            <span className="text-dark whitespace-nowrap">{catTitle}</span>
                            {isSub && (queryId === id ? <Minus /> : <Plus />)}
                        </Link>

                        {isSub && (
                            <ul className={`${queryId === id ? 'py-[20px] px-[28px] flex flex-col gap-4 border-t-2 border-t-[rgba(0,0,0,.16)]' : 'max-h-0 p-0 overflow-hidden'}`}>
                                {subCats.map(({ sCatTitle, tabid }, index) => (
                                    <li key={sCatTitle + index}>
                                        <Link href={`/services?id=${id}&tab=${tabid}`}>
                                            <span className={`text-[rgba(0,0,0,.48)] text-[20px] ${queryTab === tabid && "text-dark"}`}>
                                                {sCatTitle}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="mt mt-[72px] mtb:mt-0 mb-20">
            <div className="container">
                <Suspense fallback={<p>Loading...</p>}>
                    <AsideMenu />
                </Suspense>

                <div className="right flex-2">
                    {children}
                </div>
            </div>
        </section>
    );
}

const Minus = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6.667 17.333V14.667H25.333V17.333H6.667Z" fill="#1C1B1F" />
    </svg>
);

const Plus = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M14.667 25.333V17.333H6.667V14.667H14.667V6.667H17.334V14.667H25.334V17.333H17.334V25.333H14.667Z" fill="#1C1B1F" />
    </svg>
);
