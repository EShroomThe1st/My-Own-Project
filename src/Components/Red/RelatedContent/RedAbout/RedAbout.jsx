import React, { useState } from 'react';
import styles from './RedAbout.module.css';
import { Grow } from '@mui/material';
import { RedBook } from '../../../../Share/NavOptions';

const RedAbout = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openPopUp = () => {
    setSelectedItem(0); // Set selectedItem to 0 to display page 1
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const navigateForward = () => {
    if (selectedItem === null || selectedItem === RedBook.length - 1) {
      setSelectedItem(0);
    } else {
      setSelectedItem(selectedItem + 1);
    }
  };

  const navigateBackward = () => {
    if (selectedItem === null || selectedItem === 0) {
      setSelectedItem(RedBook.length - 1);
    } else {
      setSelectedItem(selectedItem - 1);
    }
  };

  return (
    <div>
      <div className={styles.SideImage} onClick={openPopUp}></div>
      {RedBook?.map((options, index) => (
        <div key={options.page}>
          {selectedItem === index && (
            <div className={styles.overlay}>
              <Grow in={true}>
                <div className={styles.popup}>
                  <span className={styles.close} onClick={closePopup}>
                    &times;
                  </span>
                  <div className={styles.Content}>
                    <img  className={styles.BookImages} src={options.img} alt={`Page ${options.page}`} />
                    <div className={styles.Poem}>
                      <h1 style={{textAlign:"center", position:"relative", left:".5rem"}}>{options.header}</h1>
                      <div className={styles.Paragraph}>
                        <p>{options.line1}</p>
                        <p>{options.line2}</p>
                        <p>{options.line3}</p>
                        <p>{options.line4}</p>
                      </div>
                      <div className={styles.Paragraph}>
                        <p>{options.line5}</p>
                        <p>{options.line6}</p>
                        <p>{options.line7}</p>
                        <p>{options.line8}</p>
                      </div>
                      <div className={styles.Paragraph}>
                        <p>{options.line9}</p>
                        <p>{options.line10}</p>
                        <p>{options.line11}</p>
                        <p>{options.line12}</p>
                      </div>
                      <div className={styles.Paragraph}>
                        <p>{options.line13}</p>
                        <p>{options.line14}</p>
                        <p>{options.line15}</p>
                        <p>{options.line16}</p>
                      </div>
                      <div className={styles.Paragraph}>
                        <p>{options.line17}</p>
                        <p>{options.line18}</p>
                        <p>{options.line19}</p>
                        <p>{options.line20}</p>
                      </div>
                      <div className={styles.Paragraph}>
                        <p>{options.line21}</p>
                        <p>{options.line22}</p>
                        <p>{options.line23}</p>
                        <p>{options.line24}</p>
                      </div>
                      <div className={styles.Paragraph}>
                        <p>{options.line25}</p>
                        <p>{options.line26}</p>
                        <p>{options.line27}</p>
                        <p>{options.line28}</p>
                      </div>
                    </div>
                  </div>

                  <span className={styles.NavigateBack} onClick={navigateBackward}>
                  &lt;
                  </span>
                  <span className={styles.NavigateForward} onClick={navigateForward}>
                  &gt;
                  </span>
                </div>
              </Grow>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RedAbout;