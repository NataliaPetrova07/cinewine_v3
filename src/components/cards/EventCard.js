import React from "react";
import Link from "next/link";

function EventCard({ evtnumber = "#01", evttitle = "Opening Screening" }) {
  return (
    <Link href="/events/single_event" className="card">
      <div className="evtnumber">{evtnumber}</div>
      <div className="evttitle">{evttitle}</div>
    </Link>
  );
}

export default EventCard;
