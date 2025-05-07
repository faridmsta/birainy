import dynamic from 'next/dynamic';

const fallbackComponent = () => import('./categorySections/Sec11');


interface PageProps {
    searchParams?: Promise<{ [key: string]: string | undefined }>;
}

const Page = async ({ searchParams }: PageProps) => {
    const params = await searchParams;
    const id = Number(params?.id) <= 4 ? params?.id || '1' : '1';
    const tab = params?.tab || '1';

    const DynamicComponent = dynamic(
        () =>
            import(`./categorySections/Sec${id}${tab}`).catch(() => fallbackComponent()),
        {
            loading: () => <p>Loading...</p>,
        }
    );

    return (
        <div>
            <div className="more">
                <DynamicComponent />
            </div>
        </div>
    );
};

export default Page;
