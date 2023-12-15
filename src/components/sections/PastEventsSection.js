import React, { useState, useEffect } from "react";
import LabeledDivider from "../dividers/LabeledDivider";
import EventCard from "../cards/EventCard";
import Link from "next/link";

export default function PastEventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from Supabase here
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="past">
        <LabeledDivider label={"Past events"} />
        <div className="past grid">
          {events.map((event) => (
            <EventCard key={event.id} evtnumber={event.event_nr} evttitle={event.event_name} />
          ))}
        </div>
      </div>
      <div className="link center">
        <Link href={"/events"}>Explore all</Link>
      </div>
    </>
  );
}
