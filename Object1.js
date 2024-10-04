var employee={
    empname:"siva",
    empid:"M2P684",
    job:"QA",
    salary:50000,
    bonus:

//function inside an object is method
    function (){
        return ((this.salary*10)/100);
    }
};

console.log(employee.bonus())