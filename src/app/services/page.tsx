import dynamic from 'next/dynamic'
const fallbackComponent = () => import('./categorySections/Sec11');


const cts = [
    [
        {
            title: "Proqram Təminatı",
        },
        {
            title: "Sürətli Axtarış Sistemi",
        },
        {
            title: "CRM və ERPi",
        },
        {
            title: "Mobil tətbiqlər",
        },
    ],
    [
        {
            title: "Saytların yaradılması",
        }
    ],
    [
        {
            title: "Oyun Təminatı",
        },
        {
            title: "Stend və VR oyunları",
        },
        {
            title: "Veb oyunlar",
        },
        {
            title: "VR simulyatorlar",
        },
        {
            title: "Oyun monitoru kirayəsi",
        },
    ],
    [
        {
            title: "Data analitikası",
        },
        {
            title: "Maliyyə təhlili",
        },
        {
            title: "İnsan Resurslarının təhlili",
        },
        {
            title: "Optimizasiya təhlili",
        },
        {
            title: "Satınalma təhlili",
        },
        {
            title: "Əsas Performans Göstəriciləri (KPI) təhlili",
        },
        {
            title: "1C proqramı ilə inteqrasiya",
        },
        {
            title: "SƏTƏM təhlili",
        },
        {
            title: "Satış/KPI",
        },
        {
            title: "Sosial Media",
        },
        {
            title: "Restoranlar",
        },
    ],
];


const Page = ({ searchParams }: { searchParams: { [key: string]: string | undefined | any } }) => {



    const id = (searchParams?.id<=4)? searchParams?.id || 1 : 1
    const tab = searchParams?.tab || 1
    
    const DynamicComponent = dynamic(
        () =>
            import(`./categorySections/Sec${id}${tab}`)
                .catch((error) => {
                    return fallbackComponent();
                }),
        {
            loading: () => <p>Loading...</p>,
        }
    );


    return (
        <div>
            {/* <div className="title text-[2rem] vs:text-[2.5rem] md:text-[3rem] mtb:!text-[4rem] font-neue "
            >{cts?.[id - 1]?.[tab - 1]?.title}</div> */}
            <div className="more" ><DynamicComponent /></div>
        </div>
    );
};

export default Page;
