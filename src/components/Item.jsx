import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({ item, width }) => {
    const navigate = useNavigate();
    const {
        palette: { primary },
    } = useTheme();
    const { categoria, precio, nombre, avatar } = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    small: { url },
                }
            }
        }
    } = avatar;
    return (
        <Box width={width}>
            <Box
                position="relative"
            >
                <img 
                    alt={item.nombre}
                    width="250px"
                    height="141.5px"
                    src={`https://popular-nurture-36b9643220.media.strapiapp.com/${url}`}
                    onClick={() => navigate(`/vehiculos/${item.attributes.url}`)}
                    style={{ cursor: 'pointer' }}
                />
                
            </Box>
    
            <Box mt="3px">
                <Typography variant='subtitle2' color={primary.dark}>
                    {categoria
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}  
                </Typography>
                <Typography>{nombre}</Typography>
                <Typography fontWeight="bold">{precio}</Typography>
    
            </Box>
        </Box>
      );
}

export default Item;