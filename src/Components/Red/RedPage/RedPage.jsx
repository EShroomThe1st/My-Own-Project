import React, { useEffect, useState } from 'react'
import RedNav from '../RedNav/RedNav'
import styles from './RedPage.module.css'
import RedTitle from '../RedTitle/RedTitle'
import { useStateContext } from '../../../context/StateContext'
import { RedItems } from '../../../Share/NavOptions'

const RedPage = () => {
    const [ModuleCategory, setModuleCategory] = useState("Default");
    const [redItems, setRedItems] = useState(RedItems); // Use state variable for redItems
    const { setCurrentPage } = useStateContext();

    useEffect(() => {
        setCurrentPage('Red');
    }, [])

    useEffect(() => {
        if (ModuleCategory !== "Default") {
            const filteredItems = RedItems.filter(item => item.id === ModuleCategory);
            setRedItems(filteredItems); // Update redItems state with filtered items
        } else {
            setRedItems(RedItems); // Set redItems state to original array when ModuleCategory is "Default"
        }
    }, [ModuleCategory])

    return (
        <div className={styles.RedBackground}>
            <RedTitle />
            <div className={styles.RedBody} >
                <RedNav
                    ModuleCategory={ModuleCategory}
                    setModuleCategory={setModuleCategory}
                />
                {redItems?.map((options, index) => (
                    <img src={options.img} key={index} /> // Add a unique key prop for each mapped item
                ))}
            </div>
        </div>
    )
}

export default RedPage