import React from "react";
import HydroShareResourcesSelector from "@site/src/components/HydroShareResourcesSelector";
import Header from "@site/src/components/Header";
import Layout from '@theme/Layout';
import { items } from "./constants";
import TechBox from "@site/src/components/TechBox";

export default function AppsPage() {
  return (
    <Layout title="Applications" description="CIROH Applications">
    
      <div className="margin-top--lg">
        <Header 
            title="Web Applications" 
            tagline="En­hance fore­cast­ing, ana­lys­is, and wa­ter re­source man­age­ment by mak­ing your web ap­plic­a­tions and tools ac­cess­ible to CIROH and NOAA's hy­dro­lo­gic re­search ini­ti­at­ives."
            buttons={[
              { label: "Add your App", href: "/contribute", primary: true },
              { label: "Develop Your App", href: "/develop" }
            ]}
        />
      </div>
      <main>
        <HydroShareResourcesSelector keyword="nwm_portal_app" />
        <TechBox items={items} type={"Applications"} tethys/>
      </main>
    
    </Layout>
  );
}

