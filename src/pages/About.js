import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:10,
        p:3,
        textAlign: 'center',
        '& h4':{
          fontWeight: 'bold',
          mb: '10px'
        },
        '& p':{
          textAlign: 'justify'
        },
        '@media (max-width: 600px)':{
          mt: 0
        }
      }}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          lorem Vero ipsum dolore voluptua no erat diam amet, sanctus lorem
          eirmod accusam sanctus elitr erat, no diam ut ea labore,. Ea aliquyam
          erat dolores takimata lorem amet ipsum consetetur eirmod eos, sed et
          justo gubergren tempor lorem est. Ipsum ut sit diam labore clita sea
          sed vero. Clita aliquyam amet et et. Justo et sadipscing dolores kasd
          dolore clita. Accusam ut dolor aliquyam sit est. Eirmod erat dolore
          voluptua lorem. Rebum sea et aliquyam duo lorem lorem, rebum ipsum
          voluptua lorem voluptua diam gubergren eos sed dolor, rebum labore
          lorem diam sit, lorem nonumy et ipsum voluptua eos sadipscing, sed
          dolor accusam diam invidunt erat rebum accusam nonumy. Elitr ipsum sit
          kasd nonumy magna. Ipsum dolore amet sit ea est.{" "}
        </p>
        <br />
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
        <br />
        <br />
        <br />
      </Box>
    </Layout>
  );
};

export default About;
