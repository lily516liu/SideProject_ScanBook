import React from 'react';
import './homepage/homestyle.css';
import logo from './homepage/logo.svg';
import sample1 from './homepage/sample1.png';
import sample2 from './homepage/sample2.png';
import sample3 from './homepage/sample3.png';
import sample4 from './homepage/sample4.png';
import sample5 from './homepage/sample5.png';

function HomePage() {
  return (
    <div>
      <section>
        <div className="bg_top bg">
          <div className="bg_filter">
            <div className="logo_wrap flex justify-center py-6">
              <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="sample flex justify-center content-end">
              <div className="sample_wrap">
                <img
                  className="sample_img h-3/4"
                  src={sample1}
                  alt="sample"
                ></img>
              </div>
              <div className="sample_wrap">
                <img
                  className="sample_img h-5/6"
                  src={sample2}
                  alt="sample"
                ></img>
              </div>
              <div className="sample_wrap">
                <img
                  className="sample_img h-full"
                  src={sample3}
                  alt="sample"
                ></img>
              </div>
              <div className="sample_wrap">
                <img className="sample_img" src={sample4} alt="sample"></img>
              </div>
              <div className="sample_wrap">
                <img
                  className="sample_img h-full"
                  src={sample5}
                  alt="sample"
                ></img>
              </div>
            </div>
            <div className="test_account py-10">
              <div className="flex justify-center">測試帳號：bookytesting@gmail.com</div>
              <div className="flex justify-center">測試密碼：connectme123*</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg_center bg">
          <div className="bg_filter">
            <h2>Scroll To Center</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="bg_bottom bg">
          <div className="bg_filter">
            <h2>Scroll To Bottom</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
