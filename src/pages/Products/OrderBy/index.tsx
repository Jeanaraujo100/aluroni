import classNames from "classnames";
import React, { useState } from "react";
import styles from "./OrderBy.module.scss";
import sortingTypes from "./sortingtypes.json";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IOrder } from "common/interfaces/IOrder";

interface IOrderBy {
  orderbyValue: IOrder,
  setOrderbyValue: React.Dispatch<React.SetStateAction<IOrder>>
}



export default function OrderBy({ orderbyValue, setOrderbyValue }: IOrderBy) {
  const [open, setOpen] = useState(false);
  const nameOrderby = sortingTypes.find((sortingType) => sortingType.value === orderbyValue)?.nome
  return (
    <button className={classNames({
      [styles.orderBy]: true,
      [styles["orderBy--active"]]: orderbyValue !== ""
    })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrderby || "Ordenar por"}</span>
      {open ? <MdKeyboardArrowUp size={20} />: <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.orderBy__options]: true,
        [styles["orderBy__options--active"]]: open
      })}>
        {sortingTypes.map(sortingType => (
          <div
            key={sortingType.value}
            onClick={() => setOrderbyValue(sortingType.value as IOrder)}
            className={styles.orderBy__option}
          >
            {sortingType.nome}
          </div>
        ))}
      </div>
    </button>
  )
}