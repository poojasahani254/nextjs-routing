import AddressIcon from "../../../icons/Location";
import DateIcon from "../../../icons/DateIcon";
import DetailsItem from "./details-Item";
import classes from "./book-details-home.module.css";
import Image from "next/image";

export default function BookDetailHome(props) {
  const { date, location, image, title } = props.item;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = location.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={title} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <DetailsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </DetailsItem>
        <DetailsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </DetailsItem>
      </ul>
    </section>
  );
}
