import React from 'react'
import RedTabBanner from "../../Banner/RedTabBanner";
import { RedBanner, RedContent } from "../../../../Share/NavOptions";
import styles from './RedTabContent.module.css'
import BruteForceItems from '../TabItems/BruteForceItems/BruteForceItems';
import BrainstormItems from '../TabItems/BrainstormItems/BrainstormItems';
import ToolsItems from '../TabItems/ToolsItems/ToolsItems';


const RedTabContents = ({ModuleCategory, setModuleCategory}) => {
  return (
    <div>          
        {RedContent?.map((options, index) => (
        <div key={index} style={{display:"grid"}}>
           { options.id === ModuleCategory && (
            <>
              <div className={styles.ContentBox} style={{backgroundColor:options.backgroundcolor, borderRadius:"2rem", color:options.textcolor, padding:"2rem", width:"50rem", display:"flex", flexDirection:"column", justifySelf:"center", height:"1445.200px"}}>
                  <h1 className={styles.ContentHeader}>{options.header}</h1>
                  <RedTabBanner Images={RedBanner.filter((image) => image.category === ModuleCategory)}/>
                  <p className={styles.Content}>{options.content}</p>
                  <h2 className={styles.ContentFooter}>{options.New}</h2>
                  <BruteForceItems ModuleCategory={ModuleCategory}
                  setModuleCategory={setModuleCategory}/>
                  <BrainstormItems ModuleCategory={ModuleCategory}
                  setModuleCategory={setModuleCategory}/>
                  <ToolsItems ModuleCategory={ModuleCategory}
                  setModuleCategory={setModuleCategory}/>
                  <h2 className={styles.ContentFooter}>{options.footer}</h2>
                  {ModuleCategory === "Default" && (
                  <div className={styles.WhitePigeon}>
                    <img
                      src="asset/img/WhitePigeon.png"
                    />
                    <h1>Be Free</h1>
                    <p>
                      Fight for what you believe in and for the people you love<br/>
                      I'm sorry if i die<br/>
                      But if you are all safe and happy<br/>
                      I can go out with a smile on my face
                    </p>
                  </div>
                )}
              </div>
            </>
            )}
        </div>
      ))}       
    </div>
  )
}

export default RedTabContents