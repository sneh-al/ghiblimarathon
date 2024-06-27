import React from "react";

const Layout = ({
  children,
  challangers,
  status,
}: {
  children: React.ReactNode;
  challangers: React.ReactNode;
  status: React.ReactNode;
}) => {
  return <section>{challangers}</section>;
};

export default Layout;
