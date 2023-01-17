import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";
import React, { useRef, useEffect } from "react";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  console.log("hi Auth APP here");
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathName } = history.location;
        if (pathName !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
