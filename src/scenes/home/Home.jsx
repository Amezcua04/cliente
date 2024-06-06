import { Box } from "@mui/material";
import VehiclesList from "./VehiclesList";
import Background from "./Background";
import videoUrl from "../../assets/exlm-01-stage-hd.mp4";
import videoUrlP from "../../assets/exlm-01-stage-portrait-m.mp4";
// import { shades } from "../../theme";

const Home = () => {
  // const isMobile = useMediaQuery("min-width:600px");
  return (
    <Box>
      <Background
        desktopVideoSrc={videoUrl}
        mobileVideoSrc={videoUrlP}
      >
      </Background>
      <VehiclesList />
    </Box>
  );
};

export default Home;
