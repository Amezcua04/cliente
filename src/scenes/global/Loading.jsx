import React, { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      bgcolor="rgba(0, 0, 0, 0.5)"
      zIndex="1000"
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" align="center" style={{ marginTop: 20, color: '#FFFFFF' }}>
        cargando<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
      </Typography>
      <style>{`
        .dot {
          animation: blink 1.4s infinite both;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </Box>
  );
};

export default Loading;