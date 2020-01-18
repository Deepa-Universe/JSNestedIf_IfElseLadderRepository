//IF and ElseIF Ladder

// Nested If & If Else Ladder

let totalMarks=59.2;
let message;

totalMarks=Math.round(totalMarks);
console.log(totalMarks);

if((totalMarks>=0) && (totalMarks<=100))
{

    // Check Pass or Fail
    if(totalMarks<35)
    {
        message="fail";
    }
    else
    {
        if((totalMarks>=35) && (totalMarks<50)){
            message="Pass Class";
        }
        else if((totalMarks>=50) && (totalMarks<60)){
            message="Second Class";
        }
        else if((totalMarks>=60) && (totalMarks<75))
        {
            message="First Class"
        }
        else
        {
            message="Distinction";
        }
    }

}
else
{
    message="The total mark must be between 0 to 100";
}

console.log(message);