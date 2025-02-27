import React from 'react';
import styles from './styles.module.css';
import { contributeDatasetsCards } from './utils';
import StepsCards from './StepsCards';
import ActionButtons from './ActionButtons';
import CardsHeader from './CardsHeader';


export default function DatasetsTabContributeContent() {

  return (
          
    <div className={styles.currentAppSection}>

      <CardsHeader header="Create a HydroShare Resource on 4 Easy Steps" />
        <ActionButtons
            buttons={[
                { label: "Add your Data", href: "https://docs.ciroh.org/docs/products/Portal/research-portal/#data", primary: true },
                { label: "Quick Start", href: "/hydroshare" },
              ]}
        />

        <StepsCards
            steps={contributeDatasetsCards}
            containerId="add-apps-steps"
        />

    </div>
  );
}
