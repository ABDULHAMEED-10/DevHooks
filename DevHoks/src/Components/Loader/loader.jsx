import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <BeatLoader
                    color="#00a84e"
                    cssOverride={{
                        borderColor: "#00a84e",
                        zIndex: 9999,
                    }}
                    loading
                    margin={0}
                    size={48}
                    speedMultiplier={1}
                />
            </div>
        );
    }
    return <div>loader</div>;
};

export default Loader;
