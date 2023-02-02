import styles from "./Items.module.scss";
import itemsOfMenu from "./Items.json";
import Item from "./Item";
import { useEffect, useState } from "react";

interface IItems {
  filterValue: number | null,
  searchValue: string,
  orderbyValue: string,
}

export default function Items({ filterValue, orderbyValue, searchValue }: IItems) {
  const [newMenuItems, setNewMenuItems] = useState(itemsOfMenu);

  function testSearch(title: string){
    const regex = new RegExp(searchValue, 'i');
    return regex.test(title)
  }

  function testFilter(id: number){
    if(filterValue !== null) return filterValue === id;
    return true
  }

  function order(listForOrder: typeof itemsOfMenu){
    switch(orderbyValue){
      case 'porcao':
        return listForOrder.sort((a, b) => a.size > b.size ? 1 : -1)
      case 'qtd_pessoas':
        return listForOrder.sort((a, b) => a.serving > b.serving ? 1 : -1)
      case 'preco':
        return listForOrder.sort((a, b) => a.price > b.price ? 1 : -1)
      default:
        return listForOrder
    }
  }


  useEffect(() => {
    const updateSearchList = itemsOfMenu.filter(itemOfMenu => testSearch(itemOfMenu.title) && testFilter(itemOfMenu.category.id))
    setNewMenuItems(order(updateSearchList))
  },[filterValue, searchValue, orderbyValue])
  return (
    <div className={styles.items}>
      {
        newMenuItems.map(itemOfMenu => (
          <Item key={itemOfMenu.id} {...itemOfMenu}/>
        ))
      }
    </div>
  )
}