import styles from "./SearchEngine.module.scss";
import { CgSearch } from "react-icons/cg";

interface ISearchEngine {
  searchValue: string,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchEngine({ searchValue, setSearchValue }: ISearchEngine){
  return(
    <div className={styles.searchEngine}>
      <input 
        value={searchValue}
        onChange={event => {
          setSearchValue(event.target.value)
        }}
      />
      <CgSearch size={20} color="#4C4D5E"/>
    </div>
  )
}