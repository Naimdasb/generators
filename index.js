/*function* generator() {
    yield 'Hello'
    yield 'There'
    yield 'Friend'
}

const gen = generator()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
*/

function* generator(add) {
    while (add < 6) {
        yield add++
    }

}

const gen = generator(0)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)





