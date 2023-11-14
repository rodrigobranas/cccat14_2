export default interface GetAccountAccountDAO {
	getById (accountId: string, flag: boolean): Promise<any>;
}
