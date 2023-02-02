import styles from "./Filters.module.scss";
import tags from "./filters.json";
import classNames from "classnames";

type Itags = typeof tags[0];

interface IFilters {
  filterValue: number | null,
  setFilterValue:  React.Dispatch<React.SetStateAction<number | null>>
};

export default function Filters({ filterValue, setFilterValue }: IFilters) {

  function selectFilter(tag: Itags) {
    if(tag.id === filterValue) return setFilterValue(null);
    setFilterValue(tag.id)
  }

  return (
    <div className={styles.filters}>
      {tags.map(tag => (
        <button className={
            classNames({
              [styles.filters__filter]: true,
              [styles["filters__filter--active"]]: tag.id === filterValue
              })} key={tag.id} onClick={() => selectFilter(tag)}>
          {tag.label}
        </button>
      ))}
    </div>
  )
}