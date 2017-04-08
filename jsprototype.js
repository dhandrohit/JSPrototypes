function Person(name,salary,age){
    this.name = name;
    this.salary = salary;
    this.age = age;
    this.DisplayDetails = function(){
        var name = "Details of Employee\n";
        name+="=============================+\n"
        name+="Name:"+this.name+"\n";
        name+="Salary:"+this.salary+"\n";
        name+="Age:"+this.age+"\n";
        return name;
    }
}
var x = new Person("Demo Name",150000,42);
console.log("Name is:"+x.name);

//using functions
console.log(x.DisplayDetails());

//Adding a prototype property
Person.prototype.height="160 cm";
console.log(x.height);

//Adding a Prototype Function
Person.prototype.DisplayHeight = function(){
    console.log("The height of the person is :"+this.height);
}
//Call the Prototype function
x.DisplayHeight();

