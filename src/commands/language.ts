import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { findChat } from '../models/chat'
import { loc } from '../helpers/locale'
import { getChatIdForConfig } from '../helpers/getChatIdForConfig'

/**
 * Setting up the language command
 * @param bot Bot to setup the command
 */
export function setupLanguage(bot: Telegraf<ContextMessageUpdate>) {
  bot.command('linguagemoff777', async (ctx) => {
    // Get chat id
    const chatId = await getChatIdForConfig(ctx, true)
    if (!chatId) {
      return
    }
    // Get chat
    const chat = await findChat(chatId)
    // Reply
    ctx.reply(loc('select_language', chat.language), {
      reply_markup: getButtons(),
      disable_notification: true,
    })
  })
}

/**
 * Setting up callback for the language keyboard
 * @param bot Bot to setup the callback
 */
export function setupLanguageCallback(bot: Telegraf<ContextMessageUpdate>) {
  ;(<any>bot).action(async (data: string, ctx: ContextMessageUpdate) => {
    // Get language
    const datas = data.split('~')
    if (datas[0] !== 'l') return
    // Get chat id
    const chatId = await getChatIdForConfig(ctx, true)
    if (!chatId) {
      return
    }
    // Get chat
    let chat = await findChat(chatId)
    // Save language
    chat.language = datas[1]
    chat = await chat.save()
    // Update message
    await ctx.telegram.editMessageText(
      ctx.chat.id,
      (<any>ctx).update.callback_query.message.message_id,
      undefined,
      loc('language_selected_randy', chat.language)
    )
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
        {
          text: 'English',
          callback_data: `l~en`,
        },
        {
          text: 'Русский',
          callback_data: `l~ru`,
        },
      ],
      [
        {
          text: 'Português',
          callback_data: `l~pt`,
        },
        {
          text: 'Turkce',
          callback_data: `l~tr`,
        },
      ],
      [
        {
          text: 'Українська',
          callback_data: `l~uk`,
        },
        {
          text: 'Arabic',
          callback_data: `l~ar`,
        },
      ],
      [
        {
          text: 'Español',
          callback_data: `l~es`,
        },
      ],
    ],
  }
}
