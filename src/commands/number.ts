import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { checkIfAdmin } from '../helpers/checkAdmin'
import { findChat } from '../models/chat'
import { loc } from '../helpers/locale'
import { getChatIdForConfig } from '../helpers/getChatIdForConfig'

/**
 * Setting up the number command
 * @param bot Bot to setup the command
 */
export function setupNumber(bot: Telegraf<ContextMessageUpdate>) {
  bot.command('ganhadores', async (ctx) => {
    // Get chat id
    const chatId = await getChatIdForConfig(ctx)
    if (!chatId) {
      return
    }
    // Get chat
    let chat = await findChat(chatId)
    // Check if `/number XXX` format
    const numberString = (ctx.message || ctx.channelPost).text.substr(8).trim()
    if (
      numberString &&
      !isNaN(+numberString) &&
      +numberString > 0 &&
      +numberString < 10000000
    ) {
      chat.number = +numberString
      chat = await chat.save()
      // Reply
      return ctx.reply(loc('number_selected', chat.language), {
        disable_notification: true,
      })
    }
    // Reply
    return ctx.reply(loc('select_number', chat.language), {
      reply_markup: getButtons(),
      disable_notification: true,
    })
  })
}

/**
 * Setting up callback for the number keyboard
 * @param bot Bot to setup the callback
 */
export function setupNumberCallback(bot: Telegraf<ContextMessageUpdate>) {
  ;(<any>bot).action(async (data: string, ctx: ContextMessageUpdate) => {
    // Get raffle
    const datas = data.split('~')
    if (datas[0] !== 'n') return
    // Get chat id
    const chatId = await getChatIdForConfig(ctx)
    if (!chatId) {
      return
    }
    // Get chat
    let chat = await findChat(chatId)
    // Save language
    chat.number = Number(datas[1])
    chat = await chat.save()
    // Update message
    try {
      await ctx.telegram.editMessageText(
        ctx.chat.id,
        (<any>ctx).update.callback_query.message.message_id,
        undefined,
        loc('number_selected', chat.language)
      )
    } catch {
      // do nothing
    }
  })
}

/**
 * Language keyboard
 * @returns language keyboard
 */
function getButtons() {
  return {
    inline_keyboard: [
      [
        { text: '1', callback_data: `n~1` },
        { text: '2', callback_data: `n~2` },
        { text: '3', callback_data: `n~3` },
        { text: '4', callback_data: `n~4` },
      ],
      [
        { text: '5', callback_data: `n~5` },
        { text: '6', callback_data: `n~6` },
        { text: '7', callback_data: `n~7` },
        { text: '8', callback_data: `n~8` },
      ],
      [
        { text: '9', callback_data: `n~9` },
        { text: '10', callback_data: `n~10` },
        { text: '11', callback_data: `n~11` },
        { text: '12', callback_data: `n~12` },
      ],
      [
        { text: '13', callback_data: `n~13` },
        { text: '14', callback_data: `n~14` },
        { text: '15', callback_data: `n~15` },
        { text: '16', callback_data: `n~16` },
      ],
      [
        { text: '17', callback_data: `n~17` },
        { text: '18', callback_data: `n~18` },
        { text: '19', callback_data: `n~19` },
        { text: '20', callback_data: `n~20` },
      ],
    ],
  }
}
