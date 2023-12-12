import LabeledDivider from "../dividers/LabeledDivider";
import Contribute from "@/components/display/contribute";
import Link from "next/link";

function ContributeSection() {
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
          <Link href={"/volunteer"} className="link">
            volunteer
          </Link>
          <Link href={"/sponsor"} className="link">
            sponsor
          </Link>
        </div>
      </div>
    </>
  );
}

export default ContributeSection;
