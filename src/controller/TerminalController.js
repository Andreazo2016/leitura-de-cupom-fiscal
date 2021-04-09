import Chalk from 'chalk'
import ChalkTable from 'chalk-table'
import DraftLog from 'draftlog'


class TerminalController {

  constructor() {
    this.terminal = {}
  }

  initTerminal() {
    DraftLog(console).addLineListener(process.stdin)
    this.terminal = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  initializemMenuOptions(database, language) {
    const data = database.map(item => new Person(item).formatted(language))
    const table = ChalkTable(this.getTableOptions(), data)
    this.print = console.draft(table)
    this.data = data
  }

}

export default TerminalController