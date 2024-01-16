import { type AccountModel } from '../../../domain/models/account'
import { type AddAccountModel, type AddAccount } from '../../../domain/useCases/addAccount'
import { type Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  constructor(private readonly encrypter: Encrypter) { }
  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    const accountModel = { name: 'Rodrigo', email: 'rodrigo@mail.com', password: '1234' }
    return await new Promise(resolve => { resolve(accountModel as AccountModel) })
  }
}
