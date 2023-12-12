import LabeledDivider from "../dividers/LabeledDivider";
import EventCard from "../cards/EventCard";
import Link from "next/link";

export default function PastEventsSection() {
  return (
    <>
      <div className="past">
        <LabeledDivider label={"Past events"} />
        <div className="past grid">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <div className="link center">
        <Link href={"/events"}>Explore all</Link>
      </div>
    </>
  );
}
