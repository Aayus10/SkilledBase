import { Flex, Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";
import Overview from "./overview/Overview";
import Preferences from "./preferences/Preferences";
import Experience from "./experience/Experience";

export default function Profile({
  overview,

  overviewForm,
  overviewMutation,
  countries,
  experienceForm,
}) {
  return (
    <Flex justify={{ base: "center", lg: "left" }}>
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
          <Overview
            overview={overview}
            countries={countries}
            form={overviewForm}
            mutation={overviewMutation}
          />
        </TabsPanel>
        <TabsPanel value="preferences">
          <Preferences countries={countries} />
        </TabsPanel>
        <TabsPanel value="experience">
          <Experience experienceForm={experienceForm} countries={countries} />
        </TabsPanel>
      </Tabs>
    </Flex>
  );
}
