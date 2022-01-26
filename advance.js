var add = (
    function ( ) {
    var counter = 0;
    return function ( ) { return counter += 1; };
    }
)();

(function(a,b){
    return a+b;
})();

((a,b)=>{
    return a+b; 
})(1,2);

function student(name, roll, engMarks, mathMarks){
    this.name = name;
    this.roll = roll;
    this.engMarks = engMarks;
    this.mathMarks = mathMarks;
}

var addMathMarks = (function(){
    var stu = new student("Rohit", "1", "15", "24");
    return function(marks){
        stu.mathMarks = marks;
        return stu;
    }
})();

addMathMarks(100);