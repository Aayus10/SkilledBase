"use client";
import React, { useEffect, useState } from "react";
import Profile from "@/app/components/user-dashboard/profile/Profile";
import { useSession } from "next-auth/react";
import { useOverviewForm } from "@/app/hooks/useOverviewForm";
import { useRegisterOverview } from "@/app/hooks/useRegisterOverview";
import { fetchCountryList } from "@/app/services/fetchCountryList";
import { useAddExperienceForm } from "@/app/hooks/useAddExperienceForm";
import { usefetchOverview } from "@/app/services/getOverview";

export default function ProfilePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountryList(); // Wait for the promise to resolve
      if (data) {
        setCountries(data);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);

  const experienceForm = useAddExperienceForm();
  const { data: session } = useSession();
  const accessToken = session?.user?.token; // Optional chaining used here
  const overviewMutation = useRegisterOverview(accessToken);

  const { data: overview } = usefetchOverview(accessToken);
  const overviewForm = useOverviewForm(overview);

  return (
    <div>
      <Profile
        overview={overview}
        experienceForm={experienceForm}
        countries={countries}
        overviewForm={overviewForm}
        overviewMutation={overviewMutation}
      />
    </div>
  );
}
