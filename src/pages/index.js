// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/global.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

// Step 2: Define your component
const IndexPage = () => {
  return (
    // <Menu>
    //   <MenuButton className="data-[active]:bg-blue-200">My account</MenuButton>
    //   <MenuItems anchor="bottom">
    //     <MenuItem>
    //       <a className="block data-[focus]:bg-blue-100" href="/settings">
    //         Settings
    //       </a>
    //     </MenuItem>
    //     <MenuItem>
    //       <a className="block data-[focus]:bg-blue-100" href="/support">
    //         Support
    //       </a>
    //     </MenuItem>
    //     <MenuItem>
    //       <a className="block data-[focus]:bg-blue-100" href="/license">
    //         License
    //       </a>
    //     </MenuItem>
    //   </MenuItems>
    // </Menu>
    <Layout pageTitle="Home Page">
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
