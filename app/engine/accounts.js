// ----------------------------------------------------------------------------
// Application account definitions
// ----------------------------------------------------------------------------
class Account {


    constructor(number, type, name) {
        this.number = number;
        this.name = name;
        this.type = type;

        this.AccountTypes = {'Assets': 1, 'Debts': 2, 'Incomes': 3, 'Expenses':4}
        Object.freeze(this.AccountTypes);
    }
    // ----------------------------------------------------------------------------
}

class AccountPlan {
    constructor() {
        this.accounts = [
            new Account(1910, Account.AccountTypes.Assets,"Kassa")
            ,new Account(1930,Account.AccountTypes.Assets, "Företagskonto")
            ,new Account(2018,Account.AccountTypes.Debts,"Egna insättningar")
            ,new Account(3005,Account.AccountTypes.Incomes, "Årsavgifter")
            ,new Account(3010,Account.AccountTypes.Incomes, "Arvode skog")
            ,new Account(5060,Account.AccountTypes.Expenses, "Städdag")
            ,new Account(5510,Account.AccountTypes.Expenses, "Brygga underhåll")
            ,new Account(5511,Account.AccountTypes.Expenses, "Väg underhåll")
            ,new Account(5512,Account.AccountTypes.Expenses, "Pumphus underhåll")
            ,new Account(6200,Account.AccountTypes.Expenses, "Tele och post")
            ,new Account(6300,Account.AccountTypes.Expenses, "Försäkring")
            ,new Account(6570,Account.AccountTypes.Expenses, "Bankkostnader")
            ,new Account(6900,Account.AccountTypes.Expenses, "Övriga externa kostnader")
        ];
    }

    this.getAccount(id) = function(id) {}
}

module.exports = AccountPlan, Account;