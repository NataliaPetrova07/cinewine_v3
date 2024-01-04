import { useTheme } from "@/contexts/ThemeProvider";
import LabeledDivider from "../dividers/LabeledDivider";
import Contribute from "@/components/display/Contribute";
import Link from "next/link";

function ContributeSection() {
  const { appliedTheme } = useTheme();
  return (
    <>
      <div className="contribute_display">
        <Contribute />
      </div>
      <div className="contribute_flex">
        <LabeledDivider label={"Contribute to Cinewine"} />
        <h2>Become a volunteer or sponsor the event</h2>
        <p>
          Join us in making a meaningful impact and help build a stronger community by volunteering or creating memorable moments by showcasing your wine and becoming a valued sponsor. Volunteer or sponsor to elevate the event, creating lasting
          memories for all.
        </p>
        <div className="buttonsflex">
          <Link href={"/volunteer"} className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"}`}>
            volunteer
          </Link>
          <Link href={"/sponsor"} className={`${appliedTheme === "dark" ? "dark-mode-link" : "light-mode-link"}`}>
            sponsor
          </Link>
        </div>
      </div>
    </>
  );
}

export default ContributeSection;
