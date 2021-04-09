const path = require('path')
import readLine from 'readline'
import Chalk from 'chalk'
import ChalkTable from 'chalk-table'
import DraftLog from 'draftlog'


class TerminalController {

  constructor() {
    this.terminal = {}
  }

  questions = (msg = '') => {
    return new Promise(resolve => this.terminal.question(msg, resolve))
  }

  initTerminal() {
    DraftLog(console).addLineListener(process.stdin)
    this.terminal = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  close() {
    this.terminal.close()
  }

  showInTerminal = (options = [], data = {}) => {
    const table = this.configureTableTerminal(this.genericOptionsConfig(options), data)
    console.draft(table)
  }

  genericOptionsConfig = (arrayObject = []) => {
    const columns = arrayObject.map(object => ({
      field: object.field, name: Chalk[object['color'] || 'cyan'](object.name)
    }))

    return {
      leftPad: 2,
      columns
    }
  }

  configureTableTerminal = (options, structure) => {
    const tableConfig = ChalkTable(options, structure)
    return tableConfig
  }

}

export default TerminalController