'use strict'

const axios = require('axios')
const { mailer_list } = require('../../config.json')

async function send(request, response) {
  try {
    await axios({
      url: "http://10.140.0.4:3333/mailer/send",
      method: "post",
      data: {
        receiver : mailer_list,
        sender   : 'shop@balesin.id',
        subject  : 'customer request failed.',
        text     : 'customer request failed.',
        template : request.body.message,
      },
    });
  } catch (error) {
    console.log(error)

    return response.send('failed')
  }
}

module.exports = { send }

/** 
 * randi@bangjoni.com
 * ovickbs@gmail.com
 * dira@bangjoni.com
 * arra@bangjoni.com
 * dwi@bangjoni.com
 * irvan@bjtech.io
 */
