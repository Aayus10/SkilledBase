import {
  IconChevronRight,
  IconDashboard,
  IconHistory,
  IconHome,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import classes from "./UserMenu.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function UserMenu({ session, router }) {
  console.log(session);
  return (
    <Menu shadow="md" width={300}>
      <Menu.Target>
        <UnstyledButton className={classes.user}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius="xl"
            />

            <div>
              <Text fz={"md"}>{session.user.name}</Text>

              <Text mt={-5} c="dimmed" fz={"md"}>
                {session.user.email}
              </Text>
            </div>

            <IconChevronRight size={14} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<IconHome size={14} />}>Home</Menu.Item>
        <Link href={"/user-dashboard/profile"}>
          <Menu.Item leftSection={<IconDashboard size={14} />}>
            Profile Overview
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconHistory size={14} />}>
          Application Status
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item
          onClick={() => {
            signOut();
          }}
          color="red"
          leftSection={<IconLogout size={14} />}
        >
          Sign Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
