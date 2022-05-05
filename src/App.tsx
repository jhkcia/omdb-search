import { SearchArea } from "./SearchArea/SearchArea";

function App() {
  const handleSearchQuery = (query: string) => { console.log(query) }
  return <>
    <SearchArea handleSearchQuery={handleSearchQuery} />
  </>;
}

export default App;
