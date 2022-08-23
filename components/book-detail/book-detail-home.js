import AddressIcon from '../icons/Location';
import DateIcon from '../icons/DateIcon';
import DetailsItem from './details-Item';
import classes from './book-details-home.module.css';

export default function BookDetailHome(props) {
    const { date, location, image , title} = props.item;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const addressText = location.replace(', ', '\n');

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${image}`} alt={title} />
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
