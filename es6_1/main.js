
class User{
    //to allocate memory
    constructor(username,email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register(){
        console.log(this.username+" is now registered")
    }

    //static methods use keyword static
    static countUsers(){
        console.log("There are 50 users");
    }
   
}

 let bob = new User('Bob',"x@x.com",'test');

 bob.register();
 //static methods called with the name of class
 User.countUsers();

 class Member extends User{
    constructor(username,email, password,memberPackage){
        //super method calls the parent method
        super(username,email, password);
        //this is the extra thing we need to do in the member class
        this.memberPackage = memberPackage;
    }

    getPackage() { 
        console.log(this.username+" is subscribed to the "+this.memberPackage+" package");
     }
 }

 let mike = new Member('mike','mike@gmail.com','123','standard');

 mike.getPackage();
 mike.register();//is a user method we can call from here as it is in herited
 Member.countUsers();//this is static method of User





