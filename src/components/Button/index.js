import styles from "./Button.module.scss"; 
import clsx from "clsx";
//thuc te ne su dung 2 thu vien sau
//classname
//clsx: thang nay no la ham`

export default function Button({ primary, disabled }) {
  const classes = clsx(styles.btn, "d-flex", {
    [styles.primary]: primary,
    [styles.disabled]: disabled
  });

  return (
    <>
      <button className={classes}>Click me!</button>
      {/* <button
        className={clsx(styles.btn, {
          [styles.active]: true
        })}
      >
        Click me!
      </button> */}
    </>
  );
}
