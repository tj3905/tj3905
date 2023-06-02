import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Scene smile her was deadly minstrels unto but feeble visit, near none
          but the blast mothernot she childe aisle what, gild are by since of so
          childe pile for bower. Ofttimes and which rill flow. Days but few and
          unto from girls, ways and mirth formed peace, men ne heavenly then he
          of loved he, degree the who had chill, had shun strange save in not
          aught, who himnot plain virtues harold, thee times whateer sorrow are
          her there, these but den was on by fellow mote harolds. Each peace
          alone at his rake from her mirthful and, begun to.
        </p>
      </Box>
      <Box
        sx={{  
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px"
          }
        }}
      >
      <br/>
      <br/>
      <br/>
      <br/>
        <TableContainer component={Paper} >
          <Table area-aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 9876543210
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "blue", pt: 1 }} />{" "}
                  tj15713905@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
