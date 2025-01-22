import JoinGroupForm from "@/components/join-group-form";
import Title from "@/components/title";
import { getStudentGroup } from "@/lib/store-functions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentHome() {
  const navigate = useNavigate();
  const groupCode = getStudentGroup();

  useEffect(() => {
    if (groupCode) {
      // navigate to the competition page
      navigate("competition");
    }
  }, [groupCode, navigate]);

  return (
    !groupCode && (
      <div className="min-h-screen w-screen sm:w-2/3 lg:w-1/2 sm:m-auto flex flex-col items-center justify-center">
        <div className="absolute top-4 w-full">
          <Title showSmallTitle={true} showFrog={false} />
        </div>

        <JoinGroupForm />
      </div>
    )
  );
}
