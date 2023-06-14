import React from 'react'
import RedTabBanner from "../Banner/RedTabBanner";
import { RedBanner, RedContent } from "../../../Share/NavOptions";
import styles from './RedTabContent.module.css'
import BruteForceItems from '../TabItems/BruteForceItems/BruteForceItems';
import BrainstormItems from '../TabItems/BrainstormItems/BrainstormItems';


const RedTabContents = ({ModuleCategory, setModuleCategory}) => {
  return (
    <div>          
        {RedContent?.map((options, index) => (
        <div key={index} style={{display:"grid"}}>
           { options.id === ModuleCategory && (
            <>
              <div className={styles.ContentBox} style={{backgroundColor:options.backgroundcolor, margin:"2rem", borderRadius:"2rem", color:options.textcolor, padding:"2rem", width:"50rem", display:"flex", flexDirection:"column", justifySelf:"center"}}>
                  <h1 className={styles.ContentHeader}>{options.header}</h1>
                  <RedTabBanner Images={RedBanner.filter((image) => image.category === ModuleCategory)}/>
                  <p className={styles.Content}>{options.content}</p>
                  <h2 className={styles.ContentFooter}>{options.New}</h2>
                  <BruteForceItems ModuleCategory={ModuleCategory}
                  setModuleCategory={setModuleCategory}/>
                  <BrainstormItems ModuleCategory={ModuleCategory}
                  setModuleCategory={setModuleCategory}/>
                  <h2 className={styles.ContentFooter}>{options.footer}</h2>
              </div>
            </>
            )}
        </div>
      ))}       
    </div>
  )
}

export default RedTabContents