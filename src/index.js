const path = require('path')
import TerminalController from './controller/TerminalController'

const terminalController = new TerminalController()

terminalController.initTerminal()

import CupomService from './service/CupomService'

const cupomService = new CupomService(path.resolve(__dirname, '..', 'tmp'))



const OPTIONS = {
  1: 'LIST_CUPONS',
  0: 'ENCERRAR',
}

const COMANDS = [
  { descricao: 'LIST CUPONS', action: 1 },
  { descricao: 'PARAR', action: 0 }
]

const actions = {

  'ENCERRAR': async () => { terminalController.close() },

  'LIST_CUPONS': async () => {

    const files = await cupomService.getcuponsFromDirectory()

    const data = files.map(filename => ({
      filename
    }))

    terminalController.showInTerminal([
      {
        field: 'filename',
        name: 'Filename'
      }
    ], data)
  }
}


async function mainLoop() {

  try {

    const answer = await terminalController.questions('O que deseja fazer?')

    const step = parseInt(answer)

    const ACTION_NAME = OPTIONS[step]

    if (ACTION_NAME === 'ENCERRAR') {
      await actions[ACTION_NAME]()
      return;
    }

    await actions[ACTION_NAME]()

    return await mainLoop()


  } catch (error) {
    console.log(error)
    console.log('Deu error')
    return await mainLoop()
  }


}




;
(async () => {
  terminalController.showInTerminal([
    { field: 'descricao', name: "Descrição", color: 'red' },
    { field: 'action', name: "Digite", color: 'green' },
  ], COMANDS)


  await mainLoop()

})()