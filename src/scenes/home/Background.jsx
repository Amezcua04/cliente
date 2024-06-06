import React from "react";
import { Box, useMediaQuery } from "@mui/material";

const VideoBackground = ({ desktopVideoSrc, mobileVideoSrc, children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const videoSrc = isMobile ? mobileVideoSrc : desktopVideoSrc;

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
    </Box>
  );
};

export default VideoBackground;