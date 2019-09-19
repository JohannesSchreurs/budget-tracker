import React, { useState } from 'react'; 
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'; 

const ExpenseListFilter = (props) => {
    const [calenderFocused, setCalenderFocused] = useState(null);

    const onDatesChange = ({startDate, endDate}) => {
        props.dispatch(setStartDate(startDate));
        props.dispatch(setEndDate(endDate));
    }

    return(
        <div>
            <input 
                type="text" 
                value={props.filters.text} 
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value))
            }}/>
            <select 
                value={props.filters.sortBy}
                onChange={(e) => {
                    if(e.target.value === 'date') {
                        props.dispatch(sortByDate());
                    } else if(e.target.value === 'amount') {
                        props.dispatch(sortByAmount());
                    }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={props.filters.startDate} 
                startDateId="startId" 
                endDate={props.filters.endDate} 
                endDateId="endId" 
                onDatesChange={onDatesChange} 
                focusedInput={calenderFocused} 
                onFocusChange={(calenderFocused) => setCalenderFocused(calenderFocused)}
                isOutsideRange={() => false}
                numberOfMonths={1}
                showClearDates={true}
                displayFormat={() => "DD/MM/YYYY"}
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilter);