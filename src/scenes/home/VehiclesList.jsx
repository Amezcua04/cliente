import { Alert, Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { useFetch } from "../../useFetch";
import { useState } from "react";
import Item from "../../components/Item";
import Loading from "../global/Loading";
import AlertTitle from "@mui/material/AlertTitle";

const VehiclesList = () => {
  const [value, setValue] = useState("all");
  const isNonMobile = useMediaQuery("min-width:600px");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { items, loading, error } = useFetch(
    "https://popular-nurture-36b9643220.strapiapp.com/api/vehiculos?populate=*"
  );

  const filteredItems = (category) => {
    switch (category) {
      case "Electrics":
        return items?.data?.filter(
          (item) => item.attributes.categoria === "Electricos"
        );
      case "SUVs":
        return items?.data?.filter(
          (item) => item.attributes.categoria === "SUVs"
        );
      case "Autos":
        return items?.data?.filter(
          (item) => item.attributes.categoria === "Autos"
        );
      default:
        return items?.data;
    }
  };

  const itemsToDisplay = filteredItems(value);

  return (
    <Box width="80%" margin="80px auto" height="80vh">
      <Typography variant="h3" textAlign="center" sx={{ mb: 4 }}>
      <b>Conoce Nuestro Inventario</b>
      </Typography>
      {error && (
        <Alert severity="error">
          <AlertTitle>{error}</AlertTitle>
          Ha ocurrido un error al obtener los vehiculos.
        </Alert>
      )}
      {loading && <Loading />}

      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          mb: 3,
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="TODOS" value="all" />
        <Tab label="ELECTRICOS" value="Electrics" />
        <Tab label="SUV's" value="SUVs" />
        <Tab label="AUTOS" value="Autos" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(auto-fill, minmax(150px, 1fr))", // Mobile
            sm: "repeat(auto-fill, minmax(200px, 1fr))", // Tablet
            md: "repeat(auto-fill, minmax(250px, 1fr))", // Small screens
            lg: "repeat(auto-fill, minmax(300px, 1fr))", // Large screens
          },
          gap: 3,
        }}
      >
        {itemsToDisplay?.map((item) => (
          <Item item={item} key={`${item.attributes.nombre}-${item.id}`} />
        ))}
      </Box>
    </Box>
  );
};

export default VehiclesList;
