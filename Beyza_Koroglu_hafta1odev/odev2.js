/**
 * groupByCustom diye bir metod yazılacak.
 * array prototipe eklenecek tüm arraylarde çalışsın diye.
 * parametre olarak bir fonksiyon alacak bu metod.
 * parametre olarak aldığı fonksiyonun parametre konteksinde array item olacak.
 * return ettiği değere göre gruplanacak
 * (örneğin :people.groupByCustom( (item)=>item.name[0] ) dediğimde name fieldinin baş harfine göre gruplama yapacak)
 * (örneğin :people.groupByCustom( (item)=>item.age ) dediğimde age fielde göre gruplama yapacak)
 * 
 */

//İpucu 1: Array.prototype.groupByCustom =  dedikten sonra metodunuzu yazabilirsiniz

//örnek array

Array.prototype.groupByCustom = function (func) {
  let keys = this.map(func);
  keys=keys.map(key=> String(key).toUpperCase())

  const grouptedArr = this.reduce((prev, curr, idx) => {
    if (!Object.keys(prev).includes(keys[idx])) prev[keys[idx]] = []

    prev[keys[idx]].push(curr)
    return prev
  }, {})

  const sorted = Object.fromEntries(Object.entries(grouptedArr).sort())
  return sorted
}

const array = [
    {
        "name": "Marge Simpson",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Bart Simpson",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Lisa Simpson",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Moe Szyslak",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Seymour Skinner",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Ned Flanders",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Grampa Simpson",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Chief Wiggum",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Milhouse Van Houten",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Waylon Smithers",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Nelson Muntz",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Edna Krabappel-Flanders",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Announcer",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Selma Bouvier",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Barney Gumble",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Patty Bouvier",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Martin Prince",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Otto Mann",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Lou",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Todd Flanders",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Dr. Marvin Monroe",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Dr. J. Loren Pyror",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Dewey Largo",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Eddie",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Teacher",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Clerk",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Father",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Sherri Mackleberry",
        "gender": "f",
        "age": 24
    },
    {
        "name": "JANEY",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Ms. Melon",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Interviewer",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Ethan Foley",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Terri Mackleberry",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Voice",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Receptionist",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Kent Brockman",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Apu Nahasapeemapetilon",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Lenny Leonard",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Carl Carlson",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Sideshow Bob",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Ralph Wiggum",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Jimbo Jones",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Agnes Skinner",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Kearney Zzyzwicz",
        "gender": "m",
        "age": 30
    },
    {
        "name": "DOLPH",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Judge Snyder",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Jacques",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Salesman",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Woman",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Rod Flanders",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Manager",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Bleeding Gums Murphy",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Cowboy Bob",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Jacqueline Bouvier",
        "gender": "f",
        "age": 24
    },
    {
        "name": "Waiter",
        "gender": "m",
        "age": 30
    },
    {
        "name": "Gulliver Dark",
        "gender": "m",
        "age": 30
    },
]

console.log(array.groupByCustom(item=>item.gender))
console.log(array.groupByCustom(item=>item.name[0]))
console.log(array.groupByCustom(item=>item.name[4]))
console.log(array.groupByCustom(item=>item.age>25))


//örnek çıktı array.groupByCustom(item=>item.gender) için
/*
    {
        "m": [... gender m olan içerik]
        "f": [... gender f olan içerik]
    }
 */

    //örnek çıktı array.groupByCustom(item=>item.name[0]) için
/*
    {
        "A": [... name baş harfi A olan içerik]
        "B": [... name baş harfi B olan içerik]
        "C": [... name baş harfi C olan içerik]
        ... devamı
    }
 */
