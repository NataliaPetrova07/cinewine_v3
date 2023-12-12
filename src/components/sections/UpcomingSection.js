import LabeledDivider from "../dividers/LabeledDivider";
import Christmas from "../display/christmas";
import Link from "next/link";

export default function UpcomingSection() {
  return (
    <>
      <div className="christmas">
        <Christmas />
      </div>
      <div className="upcoming">
        <LabeledDivider label={"Upcoming event: Christmas edition"} />
        <h5 className="highlighted">11th December / 18:00 - 22:00</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
        <div className="buttonsflex">
          <Link href={"#"} className="link">
            LinkJoin event
          </Link>
          <Link href={"/events/single_event"} className="link">
            Learn more
          </Link>
        </div>
      </div>
    </>
  );
}
