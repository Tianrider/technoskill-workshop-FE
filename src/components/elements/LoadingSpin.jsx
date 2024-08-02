import { SunspotLoader } from "react-awesome-loaders";

export default function LoadingSpin() {
    return (
        <SunspotLoader
            gradientColors={["#FF8901", "#E0E700"]}
            shadowColor={"#FF8901"}
            desktopSize={"128px"}
            mobileSize={"100px"}
        />
    );
}
