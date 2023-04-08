import React,{useState, useEffect} from 'react'
import Img from '../../images/bg-boost-desktop.svg'
import axios from 'axios'

const Shortener = () => {
  const [inputData, setInputData] = useState('')
  const [responseData, setResponseData] = useState([])
  const [noInputField, setNoInputField] = useState(true)
  const handleInput = (e) => {
    setInputData(e.target.value)
  }
  const sendPostRequest = async () => {
    try {
      if (!inputData) {
        setNoInputField(false)
        return;
      }
      setNoInputField(true)
      const url = inputData.replace(/^https?:\/\//, "");
      let response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      setResponseData([...responseData, response.data.result.full_short_link]);
      // console.log(responseData)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="md:p-8 p-3 flex flex-col md:flex-row bg-verydarkblue rounded z-10 md:gap-6 gap-3 relative">
        <img
          src={Img}
          className="absolute overflow-hidden h-full w-full top-0 right-0 left-0 bottom-0 rounded"
        />
        <div className="grow">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={`relative w-full rounded md:p-4 p-2 mb-2 ${!noInputField ? 'border-2 border-red' : ''}`}
            value={inputData}
            onChange={handleInput}
          />
          {!noInputField && <p className="text-red relative m-0">Please add a link</p>}
        </div>
        <button
          className="bg-cyan text-white relative rounded md:p-4 p-2 self-start md:w-fit w-full"
          onClick={sendPostRequest}
        >
          Shorten It!
        </button>
      </div>
      {responseData.map(data => {
        return (
          <div className="w-full bg-white rounded p-4 text-black my-3 flex flex-col md:flex-row justify-between md:items-center gap-y-3">
            <div className="text-left bg-white">{inputData}</div>
            <div className='md:hidden block w-full h-px bg-gray'></div>
            <div className="flex md:flex-row flex-col gap-x-4 md:items-center bg-white">
              <div className="text-cyan text-left p-2">{data}</div>
              <button className="text-white bg-cyan rounded px-6 py-2 w-full">
                Copy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shortener