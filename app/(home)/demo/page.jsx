"use client";
import React, { useEffect, useState } from "react";

export default function DemoPage() {
  const [value, setValue] = useState([]);
  const fetchData = async () => {
    const data = await fetch("http://192.168.1.10:4000/posts");
    const response = await data.json();
    setValue(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(value);

  return <div></div>;
}
