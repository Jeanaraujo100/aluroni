import styles from "./Products.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg";
import SearchEngine from "./SearchEngine";
import { useState } from "react";
import Filters from "./Filters";
import OrderBy from "./OrderBy";
import Items from "./Items";
import { IOrder } from "common/interfaces/IOrder";

export default function Products(){
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState<number | null>(null);
  const [orderbyValue, setOrderbyValeu] = useState<IOrder>('')
  return(
    <main>
      <nav className={styles.products}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa.
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className={styles.menu__filters}>
          <Filters filterValue={filterValue} setFilterValue={setFilterValue} />
          <OrderBy orderbyValue={orderbyValue} setOrderbyValue={setOrderbyValeu}/>
        </div>
        <Items filterValue={filterValue} searchValue={searchValue} orderbyValue={orderbyValue} />
      </section>
    </main>
  )
}