import React, {useState, useEffect} from 'react';
import Axios from "axios";

import './style.css';
import HeaderInner from '../../components/HeaderInner'
import Footer from '../../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function Videos() {

  const [video, setVideos] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const result = await Axios.get(process.env.REACT_APP_API_BASE_URL + "/video");
      setVideos(result.data);
      console.log(result.data)
    };
 
    fetchData();
  }, []);

  return(

    <>

      <HeaderInner />

      <section className="videos">

        <div className="content">

          <div className="videolist">

            {video.map(item =>

                <video controls  key={item._id} controlsList="nodownload">
                  <source src={item.file_url} type="video/mp4" />
                </video>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Videos;