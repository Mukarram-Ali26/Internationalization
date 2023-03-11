import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import translate from 'translate-google-api';
const TranslateWithAPI = () => {
    const text = "We are always open to discussing new ideas. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!"
    const [tT, settT] = useState('')
    useEffect(() => {
        axios
      .post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: 'ar-SA',
            key: process.env.REACT_APP_TRANSLATE_WITH_API
          }
        }
      )
      .then((response) => {
        settT(response.data.data.translations[0].translatedText);
      })
      .catch((err) => {
        console.log('rest api error', err);
      });

        // const TranslateFunction= async()=>{
        // const result = await translate(text, {//(['Hi', 'How are you?', `I'm fine`],
        //     tld: "cn",
        //     to: "vi",
        //   });
        //   settT(result)
        // }
        // TranslateFunction()
    }, [text])
    
    return (
    <div>
      <h1>This Translation is done using Google API</h1>
      <div>

      {tT}
      </div>
      <hr />
      </div>
  )
}

export default TranslateWithAPI