import classes from './book-summary.module.css';

export default function BookSummary(props) {
    const { title } = props;

    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}
