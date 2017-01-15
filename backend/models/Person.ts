
// import "reflect-metadata";
// const bodyCheckKey = Symbol("BodyCheck");

// @Table()
// class MyClass{
//     @Column()
//     name: string;
// }



export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

export function isPerson(person:Person): person is Person {
    let arg = (person as Person);
    return arg.firstName !== undefined
        && arg.lastName !== undefined
        && arg.age !== undefined;
}

// function Table(){
//     return function(target: Function) {
//         console.log(Reflect.getMetadata(bodyCheckKey, target));
        
//     }
// }

// function Column() {
//     return function(object: Object, propertyName: string) {
//         let globalScope = (global as any);
//         if(!globalScope.metaData) {
//             globalScope.metaData = [];
//         }



//         // console.log(object);      
//         // console.log((Reflect as any).getMetadata("design:type", object, propertyName).name);
//         Reflect.defineMetadata(bodyCheckKey, propertyName, (object as Function).constructor);
//     }
// }

