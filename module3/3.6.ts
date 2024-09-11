{
    //
    
    
    //getter setter
    class BankAccount {
       public id: number;
       public name: string;
       protected _balance: number; // only class er modde access kora jai others method er modde access kora jai
    
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        //setter
        set deposit(amount: number){
            this._balance = this._balance+ amount 
               }
    //    public addDebit(amount: number){
    //       this._balance = this._balance + amount;
    //     }

    //getter
    get balance(){
        return this._balance;
    }

    //    public getBalance(){
    //         return this._balance;
    //     }
    }
    
    // class StudentAccount extends BankAccount {
    //     test() {
    //         this._balance;
    //     }
    // }
    
    const goribManuserAccount = new BankAccount(111, "Mr. gorib", 30);
    // goribManuserAccount.balance = 0;

    // goribManuserAccount.addDebit(500) // function call korte hosse
    goribManuserAccount.deposit =50
    // const myBalance = goribManuserAccount.getBalance() // function call korte hosse
    const myBalance = goribManuserAccount.balance
    console.log(myBalance)
    
        //
    }