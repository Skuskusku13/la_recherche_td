import React from "react";
import { Text } from "@chakra-ui/react";
import { SexionTitle } from "./styles";
import Link from "next/link";
import logoImage from "../Images/tour.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <SexionTitle>
        <Link href={"/"} passHref>
          <Image
            src={logoImage}
            alt="logo de la boite"
            id="logoImage"
            width={"80px"}
            height={"50px"}
            objectFit={"cover"}
          />
        </Link>

        <Link href={"/"} passHref>
          Home
        </Link>

        <Link href={"/Recherche"} passHref>
          Recherche
        </Link>

        <Link href={"/Donation"} passHref>
          Donation / Tips
        </Link>

      </SexionTitle>

      <Text
        color={{
          sm: "red",
          md: "blue",
          lg: "green",
          xl: "purple",
        }}
      >
        Hello World
      </Text>
    </div>
  );
};

export default NavBar;
