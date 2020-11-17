import React from 'react';


export const Icon = ({ name, ...rest }) => {
    const ImportedIconRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                console.log(`./icons/${name}.js`)
                console.log(await import(`./icons/${name}.js`));
                ImportedIconRef.current = (await import(`./icons/${name}.js`)).default;

            } catch (err) {
                throw err;
            } finally {

                setLoading(false);
            }
        };
        importIcon();
    }, [name]);
    console.log(loading)
    console.log(ImportedIconRef.current)
    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;

        return <ImportedIcon {...rest} />;
    }

    return null;
};

