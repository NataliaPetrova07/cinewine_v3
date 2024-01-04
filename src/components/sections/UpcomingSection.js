import { useTheme } from "@/contexts/ThemeProvider";
import LabeledDivider from "../dividers/LabeledDivider";
import Christmas from "../display/Christmas";
import Link from "next/link";

export default function UpcomingSection() {
  const { appliedTheme } = useTheme();
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
          <Link href={"https://www.facebook.com/events/897426808393384"} target="_blank" rel="noopener noreferrer" className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"}`}>
            Join event
          </Link>
        </div>
      </div>
    </>
  );
}
