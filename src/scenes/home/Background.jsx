import React, { useRef } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../../index.css";

const VideoBackground = ({ desktopVideoSrc, mobileVideoSrc, children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const videoSrc = isMobile ? mobileVideoSrc : desktopVideoSrc;
  const scrollToRef = useRef(null);

  const handleScrollDown = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Puedes agregar múltiples formatos de video para compatibilidad */}
      </video>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          // Estilo adicional para el contenido superpuesto
        }}
      >
        {children}
      </Box>
      <Box
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <IconButton
          color="primary"
          onClick={handleScrollDown}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "50%",
            animation: "bounce 2s infinite",
          }}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
      <Box ref={scrollToRef} style={{ position: 'relative', top: '100vh' }}></Box>
    </Box>
  );
};

export default VideoBackground;