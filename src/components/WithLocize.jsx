import React from 'react'
import { useTranslation, Trans } from 'react-i18next';
import { useState, useEffect } from 'react';

const WithLocize = () => {
  const { t, i18n } = useTranslation('latest');
  const [count, setCounter] = useState(0);

  const [lngs, setLngs] = useState({ en: { nativeName: 'English' }}, { fr: { nativeName: 'French' }}, { ar: { nativeName: 'Arabic' }});
  const fetchData =()=>{

    i18n.services.backendConnector.backend.getLanguages((err, ret) => {
      if (err) return // TODO: handle err...
      setLngs(ret);
      //   console.log('-------------------',ret);
    });
  }

  useEffect(() => {
    
    fetchData()
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [i18n.services.backendConnector.backend]);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
           <header className="App-header">
           <h1>This Translation is done using I18n & I18next & Locize which is translation managment system </h1>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <i>{t('counter', { count })}</i>
        </p>
        <p>
          <Trans t={t}>
           text
          </Trans>
        </p>

      </header>
      <h />
      <p>{t('text')}</p>
    </div>
  )
}

export default WithLocize