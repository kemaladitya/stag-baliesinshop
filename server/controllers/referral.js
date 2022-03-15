"use strict"

const axios = require("axios");
const { event } = require("../../config.json");

async function execute_event(request, response) {
  try {
    console.log(request.path);

    const request_event = await axios({
      url: event + request.path,
      method: "post",
      data: request.body,
    });

    return response.json(request_event.data);
  } catch (error) {
    console.log(error);

    return response.send("failed");
  }
}

module.exports = { execute_event };

/**
 * 
 * * get event :
 * ? success
   {
     "dtm": "Tue, 26 Oct 2021 10:54:48 GMT",
     "reply": [],
     "status": "success"
   }
 * 
 * * register :
 * ? success
   {
     "dtm": "Tue, 26 Oct 2021 16:50:37 GMT",
     "reply": "Selamat anda sudah teregistrasi dan ini referral code anda|Mela-G26",
     "status": "success"
   }
 * ? failed
   {
     "dtm": "Tue, 26 Oct 2021 11:38:35 GMT",
     "reply": "Anda telah teregister dan ini referral code anda|Tauf-VTU",
     "status": "failed_already_registered"
   }
 * 
 * * redeem referral :
 * ? success
   {
     "dtm": "Tue, 26 Oct 2021 17:07:29 GMT",
     "reply": "Selamat anda berhasil redeem referal code dan mendapatkan bonus gebyar_box_referral-QHY7TG",
     "status": "success"
   }
 * ? failed
   {
     "dtm": "Tue, 26 Oct 2021 16:52:09 GMT",
     "reply": "maaf anda telah mencapai limit redeem",
     "status": "failed_limit"
   }
*/
