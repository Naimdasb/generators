function* generator() {
    yield 'Hello'
    yield 'There'
    yield 'Friend'
}

const gen = generator()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


