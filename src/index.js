const path = require('path')
import readLine from 'readline'
import Chalk from 'chalk'
import ChalkTable from 'chalk-table'
import DraftLog from 'draftlog'

import CupomService from './service/CupomService'

const cupomService = new CupomService(path.resolve(__dirname, '..', 'tmp'))


const configureTableTerminal = (options, structure) => {
  const tableConfig = ChalkTable(options, structure)
  return tableConfig
}

const genericOptionsConfig = (arrayObject = []) => {

  const columns = arrayObject.map(object => ({
    field: object.field, name: Chalk[object['color'] || 'cyan'](object.name)
  }))

  return {
    leftPad: 2,
    columns
  }
}

let terminal = {}

const OPTIONS = {
  1: 'UPLOAD_CUPONS',
  0: 'ENCERRAR',
}

const COMANDS = [
  { descricao: 'UPLOAD CUPONS', action: 1 },
  { descricao: 'PARAR', action: 0 }
]


const showInTerminal = (options = [], data = {}) => {
  const table = configureTableTerminal(genericOptionsConfig(options, leftPad), data)
  console.draft(table)
}

const questions = (msg = '') => {
  return new Promise(resolve => terminal.question(msg, resolve))
}

const actions = {

  'ENCERRAR': async () => { terminal.close() },
  'UPLOAD_CUPONS': async () => {
    const files = await cupomService.getcuponsFromDirectory()

    const data = files.map(filename => ({
      filename
    }))

    showInTerminal([
      {
        field: 'filename',
        name: 'Filename'
      }
    ], data)
  }
}


async function mainLoop() {

  try {

    const answer = await questions('O que deseja fazer?')
    console.log('answer', answer)

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

  DraftLog(console).addLineListener(process.stdin)
  terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  showInTerminal([
    { field: 'descricao', name: "Descrição", color: 'red' },
    { field: 'action', name: "Digite", color: 'green' },
  ], COMANDS)

  await mainLoop()

})()