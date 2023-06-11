import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button';

const MyForm = ({ getReport }) => {
  const { currentColor, currentMode } = useStateContext();


  const [formValues, setFormValues] = useState({
    maintenanceTime: "",
    maintenanceTimeSeverity: '',
    interruptionTime: '',
    interruptionTimeSeverity: '',
    backUpTime: "",
    backUpTimeSeverity: "",
    monitoring: "",
    monitoringSeverity: "",
    responseTime: "",
    responseTimeSeverity: "",
    networkUsage: '',
    networkUsageSeverity: "",
    memoryUsage: "",
    memoryUsageSeverity: "",
    cpuUsage: "",
    cpuUsageSeverity: "",
    diskUsage: "",
    diskUsageSeverity: "",
    recoveryTime: "",
    recoveryTimeSeverity: "",
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };



  const handleCheckboxChange = (event) => {
    const target = event.target;
    const checked = target.checked;
    const name = target.name;

    setCheckedValues((prevValues) => ({
      ...prevValues,
      [name]: checked
    }));
  };


  const handleSubmit = (event) => {

    event.preventDefault();
    getReport(formValues);

  }


  /*  const formData = {};

   for (const key in checkedValues) {
     if (checkedValues[key]) {
       formData[key] = formValues[key];
     }
   }

   // Request gönderme işlemleri
   console.log('Form Data:', formData); */


  return (
    <form className="w-full  max-w-md  flex flex-wrap" onSubmit={handleSubmit}>


      <div className="bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg flex flex-wrap -mx-3  mb-6 ">
        <p className="text-4xl font-semibold m-5">Girdiler</p>
        <div className="w-full  px-3 mb-6 md:mb-0">

          {/* New form */}
          <div className='flex flex-col gap-5'>

            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Maintenance Time (ms)
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="maintenanceTime" value={formValues.maintenanceTime} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">Günlük</option>
                    <option value="80">Haftalık</option>
                    <option value="60">Aylık</option>
                    <option value="30">3 Aylık yada daha fazla</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="maintenanceTimeSeverity" value={formValues.maintenanceTimeSeverity} onChange={handleInputChange} required >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Response Time (ms)
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="responseTime" value={formValues.responseTime} onChange={handleInputChange} required >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">100'den küçük</option>
                    <option value="85">100 ile 200 arasında</option>
                    <option value="70">200 ile 1000 arasında</option>
                    <option value="30">1000'den fazla</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="responseTimeSeverity" value={formValues.responseTimeSeverity} onChange={handleInputChange} required  >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Interruption Time(Downtime)
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="interruptionTime" value={formValues.interruptionTime} onChange={handleInputChange} required >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">15 Dakikadan Az</option>
                    <option value="90">30 Dakikadan Az</option>
                    <option value="80">1 Saatten Az</option>
                    <option value="60">3 Saatten Az</option>
                    <option value="40">12 Saatten Az</option>
                    <option value="20">24 Saatten Az</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="interruptionTimeSeverity" value={formValues.interruptionTimeSeverity} onChange={handleInputChange} required >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Backup Time(Yedek Alma Sıklığı):
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="backUpTime" value={formValues.backUpTime} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">24 Saatte 1 Kere</option>
                    <option value="85">48 Saatte 1 Kere</option>
                    <option value="70">Haftada 1 Kere</option>
                    <option value="50">Aylık 1 Kere</option>
                    <option value="30">Bir Aydan Daha Fazla</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="backUpTimeSeverity" value={formValues.backUpTimeSeverity} onChange={handleInputChange}required >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Recovery Time(Yedekten Kurtarma)
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="recoveryTime" value={formValues.recoveryTime} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">30 Dakikadan Az</option>
                    <option value="85">60 Dakikadan Az</option>
                    <option value="70">3 Saatten Az</option>
                    <option value="60">12 Saatten Az</option>
                    <option value="50">24 Saatten Az</option>
                    <option value="20">1 Günden Fazla</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="recoveryTimeSeverity" value={formValues.recoveryTimeSeverity} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Monitoring
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="monitoring" value={formValues.monitoring} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">Yapılıyor</option>
                    <option value="0">Yapılmıyor</option>


                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="monitoringSeverity" value={formValues.monitoringSeverity} onChange={handleInputChange} required >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Network Usage
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="networkUsage" value={formValues.networkUsage} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">%30'dan az</option>
                    <option value="90">%30 ile %50 Arasında </option>
                    <option value="80">%50-%70 </option>
                    <option value="40">%70'den Fazla </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="networkUsageSeverity" value={formValues.networkUsageSeverity} onChange={handleInputChange} required >
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Memory Usage(Ram Kullanımı)
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="memoryUsage" value={formValues.memoryUsage} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">%30'dan az</option>
                    <option value="85">%30 ile %45 Arasında </option>
                    <option value="70">%45-%75 </option>
                    <option value="50">%70-%90 </option>
                    <option value="20">%90'dan Fazla </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="memoryUsageSeverity" value={formValues.memoryUsageSeverity} onChange={handleInputChange}  required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  CPU Usage
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="cpuUsage" value={formValues.cpuUsage} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">%20 ile %40 Arasında </option>
                    <option value="85">%40-%60 </option>
                    <option value="70">%60-%80 </option>
                    <option value="40">%80-%1000 </option>

                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="cpuUsageSeverity" value={formValues.cpuUsageSeverity} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}
            {/* --------------------------------------------- */}
            <div className="w-full  flex flex-wrap gap-1 md:gap-0 px-3 mb-10 md:mb-0">
              <div className='w-full md:w-2/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Disk Usage
                </label>
                <div className="relative ">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="diskUsage" value={formValues.diskUsage} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    <option value="100">%30'dan az</option>
                    <option value="85">%30 ile %50 Arasında </option>
                    <option value="60">%50-%75 </option>
                    <option value="30">%75-%100 </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3'>
                <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-state">
                  Önem Derecesi
                </label>
                <div className="relative md:w-1/2">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="diskUsageSeverity" value={formValues.diskUsageSeverity} onChange={handleInputChange} required>
                    <option value="" disabled selected hidden>Seçiniz</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            { /* --------------------------------------------- */}

          </div>




          <div className="mt-6 flex  justify-center">
            <button type='submit'
            style={{backgroundColor:currentColor,borderRadius:"10px",color:"white",}}
            className='hover:drop-shadow-xl p-3  hover:bg-black  '
            >
              Gönder
            </button>
          </div>
        </div>
      </div>

    </form>
  );
};

export default MyForm;

