import { useTheme } from "@/contexts/ThemeProvider";
import LabeledDivider from "../dividers/LabeledDivider";
import Christmas from "../display/Christmas";
import Link from "next/link";

export default function UpcomingSection() {
  const { appliedTheme } = useTheme();
  return (
    <div className="section_padding">
      <div className="upcoming_display">
        <Christmas />
      </div>
      <div className="upcoming">
        <LabeledDivider label={"11th December / 18:00 - 22:00 Rahuset"} />
        <h2>Christmas Edition</h2>
        <p>Come join us for the special Christmas Edition event. As always, the movie is a surprise!</p>
        <div className="buttonsflex">
          <Link href={"https://www.facebook.com/events/897426808393384"} target="_blank" rel="noopener noreferrer" className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"}`}>
            Join event on facebook
            <span className="icon_span">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
