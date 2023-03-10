import styles from "./Item.module.scss";
import itemsOfMenu from "../Items.json";
import classNames from "classnames";

type IItem = typeof itemsOfMenu[0];

export default function Item({ category,
  description,
  photo,
  price,
  serving,
  size,
  title
}: IItem) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__type]: true,
            [styles[`item__type__${category.label.toLowerCase()}`]]: true,
          })}>
            {category.label}
          </div>
          <div className={styles.item__portion}>
            {size}g
          </div>
          <div className={styles.item__amountofpeople}>
            Serve {serving} pessoa{serving > 1 ? "s" : ""}
          </div>
          <div className={styles.item__price}>
            R$ {price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}