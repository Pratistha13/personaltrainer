import React, { useState, useEffect } from "react";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

//Calendar component that displays trainings in calendar
export default function CalendarPage() {

    const localizer = momentLocalizer(moment);
    const [events, setEvents] = useState([{
        title: '',
        start: '',
        end: ''
    }]);

    const getEvents = () => {
        fetch("https://customerrest.herokuapp.com/gettrainings")
            .then(response => response.json())
            .then(responseData => {
                return setEvents(
                    responseData.map((data) => ({
                        start: new Date(moment(data.date)),
                        end: new Date(moment(data.date).add(data.duration, "minutes")),
                        title: data.activity,

                    }))
                );
            })
            .then(err => console.error(err));

    };

    useEffect(() => {
        getEvents();
    }, []);


    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                style={{ height: "100vh" }}
            />
        </div>
    );
}