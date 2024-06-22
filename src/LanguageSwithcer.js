import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{margin:"auto",display:"flex",justifyContent:"center",padding:"20px"}}>
      <button className='btn btn-primary' style={{marginRight:"20px"}} onClick={() => changeLanguage('en')}>English</button>
      <button  className='btn btn-primary'style={{marginRight:"20px"}} onClick={() => changeLanguage('fr')}>French</button>
      <button  className='btn btn-primary' onClick={() => changeLanguage('de')}>German</button>
    </div>
  );
}

export default LanguageSwitcher;
