{ /*
import React, { useState } from "react";
import { useState } from "react";
*/ }
import { useState } from "react";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

import { Header } from './components/header'
import { InputForm } from './components/form'
import { ProcessData } from './components/processdata'

export const App = () => {
  const [startDate, setStartDate] = useState<Date|null>(new Date());
  if (startDate) {
    console.log("startDate starts at ");
    console.log(startDate.toLocaleDateString());
  }

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

   return (
     <>
     <Header />
     <InputForm start={startDate} datesetter={setStartDate} />
     <ProcessData start={startDate}/>
     </>
   );
}

export default App
