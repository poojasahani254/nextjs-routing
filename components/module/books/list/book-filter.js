import classes from "./book-filter.module.css"
import {useRef} from "react";
export default function BookFilter(props) {
    const yearInputRef= useRef();
    const monthInputRef= useRef();
    function submitHandler(e){
        e.preventDefault();

        props.onSearch(yearInputRef.current.value, monthInputRef.current.value);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor={"year"}>Year</label>
                    <select id={"year"} ref={yearInputRef}>
                        <option value={"2021"}>2021</option>
                        <option value={"2022"}>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor={"month"}>Month</label>
                    <select id={"month"} ref={monthInputRef}>
                        <option value={"1"}>Jan</option>
                        <option value={"2"}>Feb</option>
                        <option value={"3"}>March</option>
                        <option value={"4"}>April</option>
                        <option value={"5"}>May</option>
                        <option value={"6"}>June</option>
                        <option value={"7"}>July</option>
                        <option value={"8"}>Aug</option>
                        <option value={"9"}>Sep</option>
                        <option value={"10"}>Oct</option>
                        <option value={"11"}>Nov</option>
                        <option value={"12"}>Dec</option>
                    </select>
                </div>
                <button type={"submit"}>
                    Find Books
                </button>
            </div>
        </form>
    )
}