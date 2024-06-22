// ExampleComponent.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function TranslateComponent() {
  const { t } = useTranslation();

  return (
    <div style={{margin:"auto",display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <p>{t('greeting')}</p>
      <p>{t('howAerU')}</p>
      <p>{t('weather')}</p>
      <p>{t('weekendPlans')}</p>
      <p>{t('favoriteDish')}</p>
      <p>{t('favoriteMovie')}</p>
      <p>{t('petName')}</p>
      <p>{t('dreamDestination')}</p>
      <p>{t('enjoyCooking')}</p>
      <p>{t('lastBook')}</p>
      <p>{t('dontUnderstand')}</p>
    </div>
  );
}

export default TranslateComponent;
