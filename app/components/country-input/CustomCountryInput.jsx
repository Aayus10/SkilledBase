"use client";
import { useEffect, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Group, Image, Menu, UnstyledButton } from "@mantine/core";
import classes from "./CountryInput.module.css";
import { fetchCountryList } from "@/app/services/fetchCountryList";

export function CountryInput() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountryList(); // ✅ Await the result
      if (data) {
        setCountry(data);
      } // Now this will log actual country data, not a Promise
    };

    fetchData();
  }, []);
  console.log(country);
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <Image src={selected.image} alt="" width={22} height={22} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
