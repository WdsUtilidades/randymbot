import { Telegraf, ContextMessageUpdate } from 'telegraf'

export function setupId(bot: Telegraf<ContextMessageUpdate>) {
  bot.command('idoff777', async (ctx) => {
    return ctx.reply(`${ctx.chat.id}, ${ctx.from.id}`)
  })
}
