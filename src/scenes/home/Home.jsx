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
        {/* <Box>
          <Typography variant="h1" color={shades.blue[400]}>
            RUVA
          </Typography>
          <Typography variant="h2" color={shades.blue[500]}>
            PUTO
          </Typography>
        </Box> */}
      </Background>
      <VehiclesList />
    </Box>
  );
};

export default Home;
