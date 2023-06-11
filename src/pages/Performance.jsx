import React, { useState } from 'react';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Pie, Button, } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

import MyForm from '../components/MyForm';
import axios from 'axios';
import AtomicSpinner from 'atomic-spinner'
import logo from "../data/Dark Blue.png"

import { useAuth0 } from '@auth0/auth0-react';



const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Performance = (formValues) => {
  const { currentColor, currentMode } = useStateContext();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const { isAuthenticated, isLoading, user } = useAuth0();

  const getReport = async (formValues) => {
    try {
      console.log("formValues geldi", formValues)
      setLoading(true)
      const { data } = await axios.post("http://127.0.0.1:8080/api/v1/performance/add", formValues)
      console.log(data)
      setReport(data)
      setLoading(false)

    } catch (error) {
      setError(error.message)
      setLoading(false);
      console.log(error)
    }
  }




  return (
    <div className="mt-10">
      {isLoading ? <div className=' flex justify-center items-center'> <AtomicSpinner /></div> :
      error ? <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <p class="font-bold">Hata</p>
      <p>{error}</p>
      
    </div>
      
      :
      isAuthenticated ?
        <div>
          {/*-------------- Form------- */}
          < section id='Inputs'>
            <div className='flex flex-wrap  justify-center '>
              <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl max-w-5xl   p-8 m-3 flex flex-col justify-center items-center gap-10 md:w-full ' >

                <MyForm getReport={getReport} />
                {loading ? " " : <a href="#Rapor">Rapora Git</a>}
              </div>

            </div>

          </section>


          {/*--------------FORM END------------------- */}

          <section id='Rapor'>

            <div className='flex flex-wrap  justify-center '>
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl max-w-5xl   p-8 m-3 flex flex-col justify-center items-center gap-10 md:w-full  ">
                <div>
                  <p className="text-xl md:text-4xl font-semibold ">Rapor</p>
                </div>
                {loading === null ? <p>Lütfen Metikleri Giriniz</p> : loading ? <AtomicSpinner /> :
                  <div>
                    <div className='flex justify-center'>


                    </div>
                    <div className="w-full">
                      <Pie id="pie-chart" data={report.circleChartList} legendVisiblity={true} height="560px" />
                    </div>

                    <div>
                      {report.report.map(text => (
                        <div>
                          <p className='text-xs md:text-md lg:text-lg' style={{ textIndent: "30px", textAlign: "justify" }}>{text}</p>
                          <br />
                        </div>
                      ))}
                    </div>
                  </div>
                }


              </div>
            </div>
          </section>
        </div>
        :
        <section id='Home'>
          <div className='flex flex-wrap justify-center  '>
            <div className='justify-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl max-w-5xl   p-8 m-3 flex flex-col justify-center items-center gap-10 md:w-full'>


              <p className='text-2xl md:text-6xl'>MATRIX</p>
              <p className='text-3xl md:text-5xl'>Performans Hesapla</p>
              <img width="350px" height="350px" src={logo} alt="" />
              <div>
                <Button
                  forPress={true}
                  color="white"
                  bgColor={currentColor}
                  text="Giriş Yap"
                  borderRadius="10px"
                  onClick={""}
                />
              </div>

              <p className='text-xs md:text-lg' >Giriş yaparak çıkan formu doldularak bir performans raporu elde edebilirsin.</p>

            </div>


          </div>
        </section>
      }




    </div >
  );
};

export default Performance;
