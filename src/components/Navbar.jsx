import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="column"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#03001C",
      top: 0,
      justifyContent: "center",
      zIndex:"100"
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45}/>
      {/* <h1 style={{ fontSize: 24, color: "#5B8FB9" }}>
        MOVEETV
      </h1> */}
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
