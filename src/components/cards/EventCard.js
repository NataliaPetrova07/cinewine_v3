import React from "react";
import Link from "next/link";

function EventCard({ evtnumber, evttitle }) {
  const backgroundImageUrl = `/0${evtnumber}-square.webp`;

  return (
    <>
      {evtnumber != null && evttitle != null ? (
        <Link href={`/events/${evttitle}`} className="card">
          <div className="card_background" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="overlay">
              <div className="evtnumber">#{evtnumber}</div>
              <div className="evttitle">{evttitle}</div>
            </div>
          </div>
        </Link>
      ) : (
        // Render disabled content
        <div className="card_disabled">
          {/* Your disabled content */}
          <div className="card_background_disabled" style={{ backgroundColor: "grey" }}>
            {/* Other disabled card content */}
            <div className="overlay">
              <div className="evttitle_disabled">No more events</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;
