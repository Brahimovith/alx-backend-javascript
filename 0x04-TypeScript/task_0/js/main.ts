interface Student
{  
     firstName:string;
     lastName:string;
     age:number;
     location:string;
}

const s1:student = {
                     firstName = "bb";
		     lastName = "uuu";
                     age=12;
                     location:"mmm";
		  }

const s2:student = {
                     firstName = "bb1";
                     lastName = "uuu1";
                     age=22;
                     location:"mmm1";
                   }

const arr:student[s1, s2];
