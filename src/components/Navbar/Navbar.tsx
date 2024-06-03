import { HStack, Image } from "@chakra-ui/react";
import react from "../../assets/react.svg";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={react} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
