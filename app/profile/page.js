import React from "react";
import Cover from "@/components/profile/Cover";
import NavigationMenu from "@/components/model/navigationMenu";
import Notes from "@/components/profile/Notes";

export default function page() {
  return (
    <div>
      <Cover />
      <NavigationMenu />
      {/* <Notes /> */}
    </div>
  );
}
