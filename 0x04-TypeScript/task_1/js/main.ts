interface Teacher{
               readonly firstName:string;
	       readonly lastName:string;
	       fullTimeEmployee:boolean;
	       yearsOfExperience:number;
	       location:string;
	       [property: string]: any;
	       }
interface Directors extends Teacher{
                numberOfReports:number;
		}
function printTeacher(firstName:string,lastName:string):string{

                return firstname[0]+". "+lastname;
		}

interface StudentClass{
               firstName:string;
	       lastName:string;
	       workOnHomework():string;
	       displayName:string;
	       }
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
    }
class StudentClass implements StudentClass {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}
