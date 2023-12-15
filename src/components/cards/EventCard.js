import React from "react";
import Link from "next/link";

function EventCard({ evtnumber, evttitle }) {
  const backgroundImageUrl = `/${evtnumber}-square.webp`;

  return (
    <Link href={`/events/${evttitle}`} className="card">
      <div className="card-background" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="overlay">
          <div className="evtnumber">{evtnumber}</div>
          <div className="evttitle">{evttitle}</div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
