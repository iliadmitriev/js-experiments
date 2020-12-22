// Class is going to construct objects like this:
// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I\'m an animal!')
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

console.log(animal)
animal.voice()

console.log(Animal.type);

class Cat extends Animal {
    static type = 'CAT'
    
    constructor(options) {
        super(options)
        this.color = options.color
    }
    
    voice() {
        // to call super class method
        super.voice()
        console.log('I\'m a cat!')
    }
    
    //getter of property ageInfo
    get ageInfo() {
        return this.age * 7
    }
    
    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})

cat.voice()

console.log(cat.ageInfo)
cat.ageInfo = 8
console.log(cat.ageInfo)

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    
    get isHidden() {
        return (this.$el.style.display == 'none')
    }
    
    set isHidden(newValue) {
        if (newValue) {
            this.hide()
        } else {
            this.show()
        }
    }
    
    hide(){
        this.$el.style.display = 'none'
    }
    
    show(){
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = '50%'
    }
}

const circle1 = new Circle({
    selector: '#circle1',
    size: 100,
    color: 'green'
})


