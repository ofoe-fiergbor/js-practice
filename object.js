class Human{
    constructor(name, age){
        this.name = name;
        this.age =age;
    }
    talk(){
        console.log(this.name + 'speaks')
    }
}
    class Man extends Human{
    }
        let man = new Man('Jake ', 25);
        man.talk()