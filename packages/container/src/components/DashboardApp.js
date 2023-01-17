import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  console.log("hi Dashboard here");
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
