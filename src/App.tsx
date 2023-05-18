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

  const [floor, setFloor] = useState<number|null>(0);
  const [desk, setDesk] = useState<string|null>(null);
//  const [email, setEmail] = useState<string|null>(null);
  const [email, setEmail] = useState<string|null>("NOBODY@nowhere.com");

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

   return (
     <>
     <Header />
     <InputForm start={startDate} datesetter={setStartDate} floor={floor} floorsetter={setFloor} desksetter={setDesk} emailsetter={setEmail} />
     <ProcessData start={startDate} floor={floor} desk={desk} email={email} />
     </>
   );
}

export default App
