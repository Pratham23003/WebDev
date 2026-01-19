class User{
    constructor(name,address,username,email,role){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = `${this.username} :${text}`;
        document.body.appendChild(h1);
    }

    checkRole(){
        return `you are ${this.role}`;
    }
}
class Admin extends User{
    constructor(name,address,username,email){
        super(name,address,username,email);
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll('h1').forEach((h1)=> h1.remove());
    }
}
let user1 = new User("Ayush", "Ludhiana", "ayush01", "ayus01@gmail.com");
let user2 = new User("Ayushi","Chandigarh","ayushi01","ayushi01@gmail.com");
let admin1 = new Admin("Rehman", "Karachi", "rhmn_admin", "rhmndacait@pmail.com");