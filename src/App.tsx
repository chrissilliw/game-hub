import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/Game/GameGrid";
import GenreList from "./components/Genres/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/Platform/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            searchText={searchText}
            onSearch={(searchText) => setSearchText(searchText)}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={4}>
            {" "}
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector
              sortOrder={selectedOrder}
              onSelectSortOrder={(sortOrder) => setSelectedOrder(sortOrder)}
            />
          </HStack>

          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
            selectedOrder={selectedOrder}
            searchText={searchText}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
