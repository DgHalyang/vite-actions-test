### ts标准库的高级类型

1. Record 是会创建新属性的非同态映射类型
2. 第一个参数可以传入继承于 any 的任何值
3. 第二个参数，作为新创建对象的值，被传入。

```
interface IPerson {
  name: string
  age: number
}

type IRecord = Record<string, IPerson>

let personMap: IRecord = {
   person1: {
       name: 'lin',
       age: 18
   },
   person2: {
       name: 'liu',
       age: 25
   } 
```

type Record<K extends string, T> = {
    [P in K]: T;
}
