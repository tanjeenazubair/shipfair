import React, { useEffect, useState } from "react";

export const AdditionalDetails = () => {

    const [toggle, setToggle] = useState(false);
    const [additionalDetails, setAdditionalDetails] = useState(JSON.parse(localStorage.getItem('additionalDetails')) || '');

    useEffect(() => {
        localStorage.setItem('additionalDetails', JSON.stringify(additionalDetails));
    }, [additionalDetails]);

    const onSaveHandler = () => {
        setToggle(prevState=>!prevState);
        setAdditionalDetails(document.getElementById('additional__content').innerText);
        localStorage.setItem('additionalDetails', JSON.stringify(additionalDetails));
    }

  return (
    <>
      <p id="additional__content" contentEditable={toggle}>
        {additionalDetails}
      </p>
      <button className="button" onClick={onSaveHandler}>{`edit & save`}</button>
    </>
  );
};
