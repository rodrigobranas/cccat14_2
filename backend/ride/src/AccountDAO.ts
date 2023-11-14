import GetAccountAccountDAO from "./GetAccountAccountDAO";
import SignupAccountDAO from "./SignupAccountDAO";

export default interface AccountDAO extends SignupAccountDAO, GetAccountAccountDAO {
	save (account: any): Promise<void>;
	getById (accountId: string, flag: boolean): Promise<any>;
	getByEmail (email: string): Promise<any>;
}
