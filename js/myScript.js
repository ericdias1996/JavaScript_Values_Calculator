class User {
    constructor(firstname, midname, lastname, credit) {
        this.firstname = firstname;
        this.midname = midname;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName() {
        let fullName = `${this.firstname} ${this.midname} ${this.lastname} is my full name`;
        return fullName;
    }
    editName(newName) {
        const name = newName.split(' ');
        this.firstname = name[0];
        this.lastname = name[1];
    }
    getMidName() {
        let midName = `My middle name is ${this.midname}`;
        return midName;
    }

}

const john = new User("Manel", "veríssimo", "Fonseca", 45);
console.log(john.getFullName());
john.editName('Manuel Fodasse');
console.log(john.getFullName());
john.getMidName('Verissimo');
console.log(john.getMidName());