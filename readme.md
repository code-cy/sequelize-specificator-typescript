# SEQUELIZE-SPECIFICATOR-TYPESCRIPT

## Install
- with node js
    - `npm i @code-cy/sequelize-specificator-typescript`

## Usage

Use this code for create generic input for findOptions for sequelize:

```typescript
import {FindOptions} from "sequelize"
import {Specificator} from "@codecy/sequelize-specificator-typescript" 
import User from "./models"
// when you want to create a generic "where" for findOptions
const filter = "field=data,field=data2";// field = "data" AND field2 = "data2"
let findOptions: FindOptions = Specificator.parse(filter).toSequelizeFindOptions();

User.findAll(findOptions);
```
API:


```typescript
// create a spec
const spec : IBoolOperator = Specificator.parse(filter);
// add operator "AND" and comparator "="
const spec2:  IBoolOperator = Specificator.where(spec).and(Specificator.equalTo("otherField", 20));
const findOptions: FindOptions = spec2.toSequelizeFindOtions();

//Comparators                           String Filter   Example
Specificator.equalsTo("field", 20)      // =            field=dato
Specificator.no("field", 20)            // !=           field!=dato            
Specificator.lessTo("field", 20)        // <            field<dato
Specificator.greatTo("field", 20)       // >            field>dato
Specificator.greatEqualTo("field", 20)  // >=           field>=dato
Specificator.lessEqualTo("field", 20)   // <=           field<=dato
Specificator.statsWith("field", 20)     // ~            field~dato
Specificator.endsWith("field", 20)      // +            field+dato
Specificator.similiarTo("field", 20)    // #            field#dato
// Operators:
//and                                                   String Filter
spec = spec.and(Specificator.equalsTo("field", 20))     // ,
//or
spec = sepc.or(Specificator.equalsTo("field", 20))      // |

// Tree
spec = spec.or(Specificator.where(...).and(...))        
//field=dato|(field=dato,field<=dato)

```  

