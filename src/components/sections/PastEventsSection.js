import { useTheme } from "@/contexts/ThemeProvider";
import React, { useState, useEffect } from "react";
import PastEvents from "@/components/display/PastEvents";
import EventCard from "../cards/EventCard";

export default function PastEventsSection() {
  const { appliedTheme } = useTheme();
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(6);

  useEffect(() => {
    // Fetch data from Supabase here
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data.data ? data.data.slice().sort((a, b) => b.id - a.id) : []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showMore = () => {
    // Increase the number of visible events by 6
    setVisibleEvents((prevVisibleEvents) => prevVisibleEvents + 6);
  };

  return (
    <>
      <div className="past">
        <div className="past_display">
          <PastEvents />
        </div>
        <div id="pastEvents" className="past grid">
          {events.slice(0, visibleEvents).map((event) => (
            <EventCard key={event.id} evtnumber={event.event_nr} evttitle={event.event_name} />
          ))}
        </div>
      </div>
      {visibleEvents < events.length && (
        <div className="center">
          <button className={`${appliedTheme === "dark" ? "darkbutton" : "lightbutton"} `} onClick={showMore}>
            Show older events
          </button>
        </div>
      )}
    </>
  );
}
