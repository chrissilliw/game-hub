import { HStack, Image } from "@chakra-ui/react";
import react from "../../assets/react.svg";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  searchText: string;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={react} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
