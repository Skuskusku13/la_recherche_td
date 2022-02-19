import React from "react";
import { Text } from "@chakra-ui/react";
import { SexionTitle } from "./styles";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <SexionTitle>
        <Link href={"/"} passHref>
          HOME
        </Link>
      </SexionTitle>

      <SexionTitle>
        <Link href={"/Recherche"} passHref>
          Recherche
        </Link>
      </SexionTitle>

      <Text 
        color={{
          sm : "red",
          md : "blue",
          lg : "green",
          xl : "purple",
        }}
      >
        Hello World
      </Text>
    </div>
  );
};

export default NavBar;
