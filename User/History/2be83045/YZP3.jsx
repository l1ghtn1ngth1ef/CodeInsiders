'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { LargeModal, SizesModal, SmallModal } from '/var/www/localhost/htdocs/cuba/src/Constant/index.jsx';
import { Client, Environment, ApiError } from "square"; 
import { Btn } from '/var/www/localhost/htdocs/cuba/src/AbstractElements.jsx';
import CommonModal from '/var/www/localhost/htdocs/cuba/src/Components/UiKits/Modals/common/modal.jsx';
import logo from '../../../square.png'; 
/* eslint-disable */

function SquareHeader() {

  const [Small, setSmall] = useState(false);
  const SmallModaltoggle = () => setSmall(!Small);
  const url = 'https://connect.squareup.com/oauth2/authorize?client_id=sq0idp-V8zhIf4GwfjYXxUJVHrZew&scope=CUSTOMERS_WRITE+CUSTOMERS_READ&session=true&redirect_uri=https://mc2.mcs.social/'
  const navigate = useNavigate();
  const path = `${process.env.PUBLIC_URL}/dashboard/square/:layout`;

  const routeChange = () => {
    navigate(path);

   }
    return (

      <li>
      <div>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={logo} alt="Logo" style={{height: '25px', width: '25px', clear: 'left', margin: '0px', overflow: 'inherit'}} isOpen={Small} toggler={SmallModaltoggle} onClick={() => {routeChange(),SmallModaltoggle()}} /></a>
        </div>
      </li>
    );
  };

export default SquareHeader;
