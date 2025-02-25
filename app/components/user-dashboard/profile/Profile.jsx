import { Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";

import Overview from "../../profile/overview/Overview";
import { fetchCountryList } from "@/app/services/fetchCountryList";

export default async function Profile() {
  const countries = await fetchCountryList();

  return (
    <Tabs color="indigo" radius="md" defaultValue="overview">
      <TabsList>
        <TabsTab value="overview">
          <Title order={5} fw={500}>
            Overview
          </Title>
        </TabsTab>
        <TabsTab value="preferences">
          <Title order={5} fw={500}>
            Preferences
          </Title>
        </TabsTab>
        <TabsTab value="experience">
          <Title order={5} fw={500}>
            Experience
          </Title>
        </TabsTab>
        <TabsTab value="education">
          <Title order={5} fw={500}>
            Education
          </Title>
        </TabsTab>
      </TabsList>
      <TabsPanel value="overview">
        <Overview countries={countries} />
      </TabsPanel>
      <TabsPanel value="messages">Messages tab content</TabsPanel>
      <TabsPanel value="settings">Settings tab content</TabsPanel>
    </Tabs>
  );
}
