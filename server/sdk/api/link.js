'use strict'

async function short(bot_name, source, chatkey, outlet) {
  try {
    const short_link = await axios({
      url    : "https://sh.balesin.id/shortchatkey",
      method : "post",
      data   : {
        bot_id,
        chatkey,
        base : `https://shop.balesin.id/site/${bot_name}/checkout?src=${source}&u=${chatkey}&c=${outlet}`,
      },
    })

    return short_link
  } catch (error) {
    console.log('@url_shortener.error |', link)
    console.log('@url_shortener.error |', error)

    return error
  }
}

module.exports = short
