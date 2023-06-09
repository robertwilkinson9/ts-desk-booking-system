import { useState, useEffect } from "react";

import axios from 'axios'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';

// import { Clean } from './components/clean'
import { Header } from './components/header'
import { InputForm } from './components/form'
import { ProcessData } from './components/processdata'

type string_or_null = string | null;

export const App = () => {
  const [startDateTime, setStartDateTime] = useState<Date|null>(new Date());
  if (startDateTime) {
    console.log("startDateTime starts at ");
    console.log(startDateTime);
    console.log(" or ");
    console.log(startDateTime.toLocaleDateString());
  }

  // const [endDateTime, setEndDateTime] = useState<Date|null>(startDateTime);
  const [endDateTime, setEndDateTime] = useState<Date|null>(null);
  if (endDateTime) {
    console.log("endDateTime ends at ");
    console.log(endDateTime);
    console.log(" or ");
    console.log(endDateTime.toLocaleDateString());
  }

  const [floor, setFloor] = useState<number|null>(0);
  const [desk, setDesk] = useState<string|null>(null);
  const [email, setEmail] = useState<string|null>(null);
  const [complete, setComplete] = useState<boolean>(false);
  const [mongodesks, setMongodesks] = useState<string_or_null[]>([null]);

  registerLocale('en-GB', enGB)
  setDefaultLocale('en-GB');

  const API_url = 'http://localhost:5179/api/';

  const get_mongodesks = async () => {
    // Change this endpoint to whatever local or online address you have
    const DESKS_url = API_url + 'desks/';

    const response = await axios.get(DESKS_url);
    console.log("IN get_mongodesks and RESPONSE is ", response);
    console.log("IN get_mongodesks and RESPONSE.STATUS is ", response.status);
    console.log("IN get_mongodesks and RESPONSE.DATA is ", JSON.stringify(response.data));
    setMongodesks(response.data);
  };

  useEffect(() => {
    get_mongodesks();
  }, [complete]);

  console.log("AFTER useEffect App and COMPLETE is ",complete," and DESKS are ", JSON.stringify(mongodesks));

  if (complete) {
//    reset(setStartDateTime, setEndDateTime, setFloor, setDesk, setEmail, setComplete); // eventually just show processdata screen for now
    return (
      <>
      <Header />
      <ProcessData start={startDateTime} sdt={setStartDateTime} end={endDateTime} edt={setEndDateTime} floor={floor} sf={setFloor} desk={desk} sd={setDesk} email={email} se={setEmail} sc={setComplete} url={API_url}/>
      </>
    );
  } else {
    return (
      <>
      <Header />
      <InputForm start={startDateTime} startdatesetter={setStartDateTime} end={endDateTime} enddatesetter={setEndDateTime} floor={floor} floorsetter={setFloor} desksetter={setDesk} email={email} emailsetter={setEmail} completesetter={setComplete} />
      </>
    );
  }
}

export default App
