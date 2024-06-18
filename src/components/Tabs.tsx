"use client";

import { useState } from "react";
import Tab from "./Tab";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const data = [
  {
    id: 1,
    title: "View All",
  },
  {
    id: 2,
    title: "Pharmaceuticals & Health Care",
  },
  {
    id: 3,
    title: "International Agencies",
  },
  {
    id: 4,
    title: "Engineering",
  },
];

const Tabs = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex flex-wrap gap-6">
      {data.map((item) => {
        const isSelected = item.id === selected;
        return (
          <Tab
            {...item}
            selected={isSelected}
            onClick={() => setSelected(item.id)}
            key={item.id}
          />
        );
      })}
      <Input placeholder="Search" Icon={Search} className="shadow-md" />
    </div>
  );
};
export default Tabs;
