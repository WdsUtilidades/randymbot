export function loc(text: string, language: string) {
  return localizations[text][language] || localizations[text].en
}

export const localizations: { [index: string]: { [index: string]: string } } = {
  public_help_start: {
    ru:
      'Olá! Eu sou um Bot Sorteador. \nEu posso selecionar aleatoriamente um participante de sorteio (para quem clica no botão \"Participar\") em um grupo ou canal. \nVocê pode alterar o número de ganhadores em cada sorteio (o padrão é 1) com o comando /ganhadores.\n\n1. \nMe adicione a um canal ou a um grupo, envie o comando /iniciar e o sorteio começa.\n2. \nResponda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.',
    en:
      "Olá! Eu sou um Bot Sorteador. \nEu posso selecionar aleatoriamente um participante de sorteio (para quem clica no botão \"Participar\") em um grupo ou canal. \nVocê pode alterar o número de ganhadores em cada sorteio (o padrão é 1) com o comando /ganhadores.\n\n1. \nMe adicione a um canal ou a um grupo, envie o comando /iniciar e o sorteio começa.\n2. \nResponda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.",
    pt:
      "Olá! Eu sou um Bot Sorteador. \nEu posso selecionar aleatoriamente um participante de sorteio (para quem clica no botão \"Participar\") em um grupo ou canal. \nVocê pode alterar o número de ganhadores em cada sorteio (o padrão é 1) com o comando /ganhadores.\n\n1. \nMe adicione a um canal ou a um grupo, envie o comando /iniciar e o sorteio começa.\n2. \nResponda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.",
    tr:
      "Olá! Eu sou um Bot Sorteador. \nEu posso selecionar aleatoriamente um participante de sorteio (para quem clica no botão \"Participar\") em um grupo ou canal. \nVocê pode alterar o número de ganhadores em cada sorteio (o padrão é 1) com o comando /ganhadores.\n\n1. \nMe adicione a um canal ou a um grupo, envie o comando /iniciar e o sorteio começa.\n2. \nResponda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.",
    uk:
      "Olá! Eu sou um Bot Sorteador. \nEu posso selecionar aleatoriamente um participante de sorteio (para quem clica no botão \"Participar\") em um grupo ou canal. \nVocê pode alterar o número de ganhadores em cada sorteio (o padrão é 1) com o comando /ganhadores.\n\n1. \nMe adicione a um canal ou a um grupo, envie o comando /iniciar e o sorteio começa.\n2. \nResponda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.",
    ar:
      "Olá! Eu sou um Bot Sorteador. \nEu posso selecionar aleatoriamente um participante de sorteio (para quem clica no botão \"Participar\") em um grupo ou canal. \nVocê pode alterar o número de ganhadores em cada sorteio (o padrão é 1) com o comando /ganhadores.\n\n1. \nMe adicione a um canal ou a um grupo, envie o comando /iniciar e o sorteio começa.\n2. \nResponda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.",
    es:
      'Olá! Eu sou um Bot Sorteador. \nEu posso selecionar aleatoriamente um participante de sorteio (para quem clica no botão \"Participar\") em um grupo ou canal. \nVocê pode alterar o número de ganhadores em cada sorteio (o padrão é 1) com o comando /ganhadores.\n\n1. \nMe adicione a um canal ou a um grupo, envie o comando /iniciar e o sorteio começa.\n2. \nResponda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.',
  },
  no_work_private: {
    ru: 'Desculpe, mas este comando não está disponível em conversas privadas',
    en: 'Desculpe, mas este comando não está disponível em conversas privadas.',
    pt: 'Desculpe, mas este comando não está disponível em conversas privadas.',
    tr: 'Desculpe, mas este comando não está disponível em conversas privadas.',
    uk: 'Desculpe, mas este comando não está disponível em conversas privadas.',
    ar: 'Desculpe, mas este comando não está disponível em conversas privadas.',
    es: 'Desculpe, mas este comando não está disponível em conversas privadas.',
  },
  select_language: {
    ru: 'Por favor, escolha o idioma',
    en: 'Por favor, escolha o idioma',
    pt: 'Por favor, escolha o idioma',
    tr: 'Por favor, escolha o idioma',
    uk: 'Por favor, escolha o idioma',
    ar: 'اPor favor, escolha o idioma',
    es: 'Por favor, escolha o idioma',
  },
  language_selected_randy: {
    ru: 'Obrigado! Agora eu falarei português!',
    en: 'Obrigado! Agora eu falarei português!',
    pt: 'Obrigado! Agora eu falarei português!',
    tr: 'Obrigado! Agora eu falarei português!',
    uk: 'Obrigado! Agora eu falarei português!',
    ar: 'Obrigado! Agora eu falarei português!',
    es: 'Obrigado! Agora eu falarei português!',
  },
  raffle_text: {
    ru:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
    en:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
    pt:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
    tr:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
    uk:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
    ar:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
    es:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
  },
  raffle_text_multiple: {
    ru:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
    en:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
    pt:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
    tr:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
    uk:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
    ar:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
    es:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
  },
  please_retry: {
    ru: 'Por favor, tente novamente daqui a alguns instantes',
    en: 'Por favor, tente novamente daqui a alguns instantes',
    pt: 'Por favor, tente novamente daqui a alguns instantes',
    tr: 'Por favor, tente novamente daqui a alguns instantes',
    uk: 'Por favor, tente novamente daqui a alguns instantes',
    ar: 'Por favor, tente novamente daqui a alguns instantes',
    es: 'Por favor, tente novamente daqui a alguns instantes',
  },
  already_participating: {
    ru: 'Você já está participando. Muito bem!',
    en: 'Você já está participando. Muito bem!',
    pt: 'Você já está participando. Muito bem!',
    tr: 'Você já está participando. Muito bem!',
    uk: 'Você já está participando. Muito bem!',
    ar: 'Você já está participando. Muito bem!',
    es: 'Você já está participando. Muito bem!',
  },
  participated: {
    ru: 'Muito bem, você agora está participando do sorteio!',
    en: 'Muito bem, você agora está participando do sorteio!',
    pt: 'Muito bem, você agora está participando do sorteio!',
    tr: 'Muito bem, você agora está participando do sorteio!',
    uk: 'Muito bem, você agora está participando do sorteio!',
    ar: 'Muito bem, você agora está participando do sorteio!',
    es: 'Muito bem, você agora está participando do sorteio!',
  },
  participants_number: {
    ru: 'Número de participantes',
    en: 'Número de participantes',
    pt: 'Número de participantes',
    tr: 'Número de participantes',
    uk: 'Número de participantes',
    ar: 'Número de participantes',
    es: 'Número de participantes',
  },
  participate_button: {
    ru: 'Participar!',
    en: 'Participar!',
    pt: 'Participar!',
    tr: 'Participar!',
    uk: 'Participar!',
    ar: 'Participar!',
    es: 'Participar!',
  },
  no_participants: {
    ru: 'Sem participantes dessa vez 😅',
    en: 'Sem participantes dessa vez 😅',
    pt: 'Sem participantes dessa vez 😅',
    tr: 'Sem participantes dessa vez 😅',
    uk: 'Sem participantes dessa vez 😅',
    ar: 'Sem participantes dessa vez 😅',
    es: 'Sem participantes dessa vez 😅',
  },
  winner: {
    ru: 'O Vencedor é',
    en: 'O Vencedor é',
    pt: 'O Vencedor é',
    tr: 'O Vencedor é',
    uk: 'O Vencedor é',
    ar: 'O Vencedor é',
    es: 'O Vencedor é',
  },
  winners: {
    ru: 'Os Ganhadores são',
    en: 'Os Ganhadores são',
    pt: 'Os Ganhadores são',
    tr: 'Os Ganhadores são',
    uk: 'Os Ganhadores são',
    ar: 'Os Ganhadores são',
    es: 'Os Ganhadores são',
  },
  congratulations: {
    ru: 'Parabéns',
    en: 'Parabéns',
    pt: 'Parabéns',
    tr: 'Parabéns',
    uk: 'Parabéns',
    ar: 'Parabéns',
    es: 'Parabéns',
  },
  raffle_over: {
    ru: 'Pedimos desculpas, mas o sorteio terminou',
    en: 'Pedimos desculpas, mas o sorteio terminou',
    pt: 'Pedimos desculpas, mas o sorteio terminou',
    tr: 'Pedimos desculpas, mas o sorteio terminou',
    uk: 'Pedimos desculpas, mas o sorteio terminou',
    ar: 'Pedimos desculpas, mas o sorteio terminou',
    es: 'Pedimos desculpas, mas o sorteio terminou',
  },
  select_number: {
    ru: 'Por favor selecione o número de ganhadores do sorteio',
    en: 'Por favor selecione o número de ganhadores do sorteio',
    pt: 'Por favor selecione o número de ganhadores do sorteio',
    tr: 'Por favor selecione o número de ganhadores do sorteio',
    uk: 'Por favor selecione o número de ganhadores do sorteio',
    ar: 'Por favor selecione o número de ganhadores do sorteio',
    es: 'Por favor selecione o número de ganhadores do sorteio',
  },
  number_selected: {
    ru: 'Ótimo! Você selecionou o número de ganhadores!',
    en: "Ótimo! Você selecionou o número de ganhadores!",
    pt: 'Ótimo! Você selecionou o número de ganhadores!',
    tr: 'Ótimo! Você selecionou o número de ganhadores!',
    uk: 'Ótimo! Você selecionou o número de ganhadores!',
    ar: 'Ótimo! Você selecionou o número de ganhadores!',
    es: 'Ótimo! Você selecionou o número de ganhadores!',
  },
  not_enough_participants: {
    ru: 'Sem participantes suficientes 😅',
    en: 'Sem participantes suficientes 😅',
    pt: 'Sem participantes suficientes 😅',
    tr: 'Sem participantes suficientes 😅',
    uk: 'Sem participantes suficientes 😅',
    ar: 'Sem participantes suficientes 😅',
    es: 'Sem participantes suficientes 😅',
  },
  subscribe_format: {
    ru:
      'Por favor, configure o canal para verificar a inscrição com o formato`/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
    en:
      'Por favor, configure o canal para verificar a inscrição com o formato`/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
    tr:
      'Por favor, configure o canal para verificar a inscrição com o formato`/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
    es:
      'Por favor, configure o canal para verificar a inscrição com o formato`/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
  },
  nosubscribe_success: {
    ru: 'O BOT não verificará a assinatura.',
    en: 'O BOT não verificará a assinatura.',
    tr: 'O BOT não verificará a assinatura.',
    es: 'O BOT não verificará a assinatura.',
  },
  bot_not_admin: {
    ru: 'Por favor, torne o bot um administrador neste chat.',
    en: 'Por favor, torne o bot um administrador neste chat.',
    tr: 'Por favor, torne o bot um administrador neste chat.',
    es: 'Por favor, torne o bot um administrador neste chat..',
  },
  bot_not_admin_chat: {
    en: 'Por favor, torne o bot um administrador no chat.',
    tr: 'Por favor, torne o bot um administrador no chat.',
    es: 'Por favor, torne o bot um administrador no chat.',
    ru: 'Por favor, torne o bot um administrador no chat.',
  },
  subscribe_success: {
    ru:
      'Ótimo, agora o bot irá verificar se o participante está inscrito no seguinte canal antes de permitir a participação: ',
    en:
      'Ótimo, agora o bot irá verificar se o participante está inscrito no seguinte canal antes de permitir a participação: ',
    tr:
      'Ótimo, agora o bot irá verificar se o participante está inscrito no seguinte canal antes de permitir a participação: ',
    es:
      'Ótimo, agora o bot irá verificar se o participante está inscrito no seguinte canal antes de permitir a participação: ',
  },
  check_subscription: {
    ru: 'Você deve estar inscrito ',
    en: 'Você deve estar inscrito ',
    tr: 'Você deve estar inscrito ',
    es: 'Você deve estar inscrito ',
  },
  raffle_message: {
    en:
      'Responda a esta mensagem para configurar uma mensagem de sorteio personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 💪 A mensagem do sorteio atual (se definida) está abaixo.',
    tr:
      'Responda a esta mensagem para configurar uma mensagem de sorteio personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 💪 A mensagem do sorteio atual (se definida) está abaixo.',
    es:
      'Responda a esta mensagem para configurar uma mensagem de sorteio personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 💪 A mensagem do sorteio atual (se definida) está abaixo.',
    ru:
      'Responda a esta mensagem para configurar uma mensagem de sorteio personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 💪 A mensagem do sorteio atual (se definida) está abaixo.',
  },
  raffle_message_off: {
    ru: 'O BOT usará a mensagem padrão do sorteio agora.',
    en: 'O BOT usará a mensagem padrão do sorteio agora.',
    tr: 'O BOT usará a mensagem padrão do sorteio agora.',
    es: 'O BOT usará a mensagem padrão do sorteio agora.',
  },
  winner_message: {
    en:
      'Responda a esta mensagem para configurar uma mensagem de vencedor personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" e "$winner" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 🎉 A mensagem do vencedor atual (se definida) está abaixo.',
    tr:
      'Responda a esta mensagem para configurar uma mensagem de vencedor personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" e "$winner" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 🎉 A mensagem do vencedor atual (se definida) está abaixo.',
    es:
      'Responda a esta mensagem para configurar uma mensagem de vencedor personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" e "$winner" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 🎉 A mensagem do vencedor atual (se definida) está abaixo.',
    ru:
      'Responda a esta mensagem para configurar uma mensagem de vencedor personalizada. Certifique-se de responder a esta mensagem (esperamos que todos já saibam o que a palavra “responder” significa). Certifique-se de incluir "$numberOfParticipants" e "$winner" sem aspas em sua mensagem — não funcionará sem elas. Saúde! 🎉 A mensagem do vencedor atual (se definida) está abaixo.',
  },
  winner_message_off: {
    ru: 'O Bot usará a mensagem padrão do vencedor agora.',
    en: 'O Bot usará a mensagem padrão do vencedor agora.',
    tr: 'O Bot usará a mensagem padrão do vencedor agora.',
    es: 'O Bot usará a mensagem padrão do vencedor agora.',
  },
  success: {
    ru: 'Sucesso!',
    en: 'Sucesso!',
    tr: 'Sucesso!',
    es: 'Sucesso!',
  },
  nodelete_true: {
    ru: 'Agora o BOT não irá editar (excluir) a mensagem original.',
    en: 'Agora o BOT não irá editar (excluir) a mensagem original.',
    es: 'Agora o BOT não irá editar (excluir) a mensagem original.',
    tr: 'Agora o BOT não irá editar (excluir) a mensagem original.',
  },
  nodelete_false: {
    ru: 'Agora o BOT irá editar (excluir) a mensagem original.',
    en: 'Agora o BOT irá editar (excluir) a mensagem original.',
    es: 'Agora o BOT irá editar (excluir) a mensagem original.',
    tr: 'Agora o BOT irá editar (excluir) a mensagem original.',
  },
  mustBeAnAdmin: {
    en: 'Você tem que ser um administrador no chat',
    ru: 'Você tem que ser um administrador no chat',
  },
  config_raffle_instructions: {
    en:
      'Sucesso! Agora selecione o chat ou canal que deseja configurar /configRaffle',
    ru:
      'Sucesso! Agora selecione o chat ou canal que deseja configurar /configRaffle',
  },
  config_raffle_no_chats: {
    en:
      'Primeiro, me encaminhe uma mensagem de um canal ou chat que você deseja configurar',
    ru:
      'Primeiro, me encaminhe uma mensagem de um canal ou chat que você deseja configurar',
  },
  select_chat: {
    en: 'Selecione um chat ou canal para configurar',
    ru: 'Selecione um chat ou canal para configurar',
  },
  private_messages: {
    en: 'Mensagens privadas',
    ru: 'Mensagens privadas',
  },
  now_editing_this_chat: {
    en: 'Ótimo! Agora você está editando a configuração deste chat',
    ru: 'Ótimo! Agora você está editando a configuração deste chat',
  },
}
