console.log('Hello world ! TypeScript !')

console.log('==========')

const name = 'Wesley Anjos'

console.log(`Olá ${name}, seja bem-vindo !`)
console.log('==========')

class Product 
{
    public name: string
    public value: number

    constructor(productName: string, productValue: number) 
    {
        this.name = productName
        this.value = productValue
    }
}

const playstation = new Product('Playstation 5', 5000)