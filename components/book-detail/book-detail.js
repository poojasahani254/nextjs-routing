import classes from './book-detail.module.css';

export default function BookDetails(props) {
    return (
        <section className={classes.content}>
            {props.children}
        </section>
    );
}

