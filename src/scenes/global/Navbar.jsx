import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(0, 0, 0, 0.6)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.blue[500]}
        >
          <img
            src="/BMW_LOGO_W.SVG"
            alt="Logo"
            style={{ height: "40px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
