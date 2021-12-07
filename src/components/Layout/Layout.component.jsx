import React from "react";
import PropTypes from "prop-types";

// Providers
import { useData } from "../../providers/DataGlobal/DataGlobal.provider";

import MainContainer from "./Layout.styles";

function Layout({ children }) {
  const { isDark } = useData();

  return <MainContainer isDark={isDark}>{children}</MainContainer>;
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
