import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const onboarding = () => {
  return (
    <div className="flex justify-center items-center pt-15">
      <OrganizationList hidePersonal />
    </div>
  );
};

export default onboarding;
