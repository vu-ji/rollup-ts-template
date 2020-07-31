class Hello {
    world:string = ''
    constructor(world: string) {
        this.world = world
    }
    toString() {
        console.log(`Hello ${this.world}!`)
    }
}

export default Hello