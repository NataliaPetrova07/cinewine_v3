import { useTheme } from "@/contexts/ThemeProvider";
import React, { useState, useEffect } from "react";
import EventCard from "../cards/EventCard";
import Link from "next/link";
import PastEvents from "@/components/display/PastEvents";

export default function HomePastEventsSection() {
  const { appliedTheme } = useTheme();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from Supabase here
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      // Sort the data in descending order based on id and then slice the first 6
      setEvents(
        data.data
          ? data.data
              .slice()
              .sort((a, b) => b.id - a.id)
              .slice(0, 6)
          : []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="past_display">
        <PastEvents />
      </div>
      <div className="past">
        <div className="past grid">
          {events.map((event) => (
            <EventCard key={event.id} evtnumber={event.event_nr} evttitle={event.event_name} />
          ))}
        </div>
      </div>
      <div className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"} link center`}>
        <Link href={"/events/#pastEvents"}>Explore all</Link>
      </div>
    </>
  );
}
