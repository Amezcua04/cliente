import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSwipeable } from "react-swipeable";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Loading from "../global/Loading";

const Details = () => {
  const { url } = useParams();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  const { items, loading, error } = useFetch(
    `https://popular-nurture-36b9643220.strapiapp.com/api/vehiculos/${url}`
  );

  const handleClickOpen = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const images = items?.data?.attributes?.imagenes?.data || [];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const equipoAdicionalList = items?.data?.attributes?.equipoAdicional.split('\n');

  return (
    <Box width="80%" m="80px auto" display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="center"
        flexWrap="wrap"
      >
        {error && (
        <Alert severity="error">
          <AlertTitle>{error}</AlertTitle>
          Ha ocurrido un error al obtener los vehiculos.
        </Alert>
      )}
      {loading && <Loading />}
        {images.length > 0 ? (
          <ImageList
            sx={{
              width: isMobile ? "100%" : "900px",
              height: isMobile ? "300px" : 600,
            }}
            variant="woven"
            cols={isMobile ? 2 : 4}
            gap={3}
          >
            {images.map((image, index) => (
              <ImageListItem
                key={`${index}-${image.attributes.name}`}
                onClick={() => handleClickOpen(index)}
              >
                <img
                  srcSet={`https://popular-nurture-36b9643220.media.strapiapp.com/${image?.attributes?.formats?.small?.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`https://popular-nurture-36b9643220.media.strapiapp.com/${image?.attributes?.formats?.small?.url}?w=161&fit=crop&auto=format`}
                  alt={image?.attributes?.name}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                {console.log(image?.data?.attributes?.formats?.small?.url)}
                
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Typography variant="h6">No images available</Typography>
        )}

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.01)",
              boxShadow: "none",
            },
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
          >
            <CloseIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <DialogContent
            sx={{ textAlign: "center", position: "relative", padding: 0 }}
            {...swipeHandlers}
          >
            <img
              src={`https://popular-nurture-36b9643220.media.strapiapp.com/${images[currentImage]?.attributes?.formats?.small?.url}?w=161&fit=crop&auto=format`}
              alt={images[currentImage]?.attributes?.name}
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
            <IconButton
              onClick={handlePrev}
              aria-label="previous"
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <ArrowBackIcon sx={{ color: "#ffffff" }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              aria-label="next"
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <ArrowForwardIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </DialogContent>
        </Dialog>
      </Box>

      <Box flex="1 1 50%" mb="40px" px={isMobile ? 2 : 4}>
        <Typography
          variant="h3"
          mb={2}
          textAlign={isMobile ? "center" : "left"}
        >
          {items?.data?.attributes?.nombre}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Año
            </Typography>
            <Typography variant="h6">
              {items?.data?.attributes?.year}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Modelo
            </Typography>
            <Typography variant="h6">
              {items?.data?.attributes?.modelo}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Vmáx
            </Typography>
            <Typography variant="h6">
              {items?.data?.attributes?.vMax} Km/h
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Precio
            </Typography>
            <Typography variant="h6">
              $ {items?.data?.attributes?.precio}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Transmision
            </Typography>
            <Typography variant="h6">
              {items?.data?.attributes?.transmision}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Color Exterior
            </Typography>
            <Typography variant="h6">
              {items?.data?.attributes?.colorExterior}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Color de Interiores
            </Typography>
            <Typography variant="h6">
              {items?.data?.attributes?.colorInteriores}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Aceleración (0 - 100) km/h
            </Typography>
            <Typography variant="h6">
              {items?.data?.attributes?.aceleracion} s
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#222",
            color: "#fff",
            borderRadius: 0,
            padding: "10px 20px",
            width: isMobile ? "100%" : "auto",
            mt: 2,
          }}
        >
          Datos Técnicos
        </Button>
        <Typography mt={4} variant="h4" sx={{ fontWeight: "bold" }}>
          Equipo Adicional
        </Typography>
        <Typography mt={2} variant="h6">
        <List>
        {equipoAdicionalList?.map((item, index) => (
          <ListItem key={index}>
          <ListItemIcon style={{ minWidth: "20px"}}>
            <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
        ))}
      </List>
        </Typography>
      </Box>
    </Box>
  );
};

export default Details;
