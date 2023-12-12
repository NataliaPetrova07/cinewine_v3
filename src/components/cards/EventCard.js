import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function EventCard({ evtnumber = "#01", evttitle = "Opening Screening" }) {
  return (
    <Link href="/events/single_event" className="card">
      <div className="evtnumber">{evtnumber}</div>
      <div className="evttitle">{evttitle}</div>
    </Link>
  );
}

// Define propTypes for the EventCard component
EventCard.propTypes = {
  evtnumber: PropTypes.string,
  evttitle: PropTypes.string,
};

export default EventCard;
