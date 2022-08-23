import Link from "next/link";
import classes from "./book-item.module.css";
import Button from "../../ui/button/button";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import DateIcon from "../icons/DateIcon";
import LocationIcon from "../icons/Location";

function BookItem({ item }) {
  const { title, location, date, image, id } = item;
  const readableDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedLocation = location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon /> <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon /> <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/books/${id}`}>
            <span>Explore Book</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default BookItem;
