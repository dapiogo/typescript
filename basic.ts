//typy danych 

let y: number
//Number - liczby
let counter: number = 10;
const PI: number = 3.14
const hex: number = 0xf
const bin: number = 0b10100;

//String

const single: string = '111'
const double: string = "xxx"
const ticks: string =  `${double} text`

//Boolean

const isLogged:boolean = true


//Array 

const data: number[] = [1,2,3,4]
const genericData: Array<number> = [1,2,3]

typeof Array

let randomNumber: number;
randomNumber = genericData[2]

//Tuple - rozne typy w tablicy
let setting: [string,boolean] = ['x',true]

//Obiekty - 

let product: {name:string,price:number,count:number}

product = {
    name:'dawid',
    price:12,
    count:33
}

const user : {name:string,getName():string} = {
    name:'Dawid',
    getName: () {
        return this.name
    }
}

//ENUM - ZBIOR NAZWANYCH WARTOSCI LICZBOWYCH

enum ExtensionType {
    doc,
    docx = 3,
    pdf
}

// ExtensionType.docx ----> 1
//ExtensionType[3] -> docx
// Extension["pdf"] -> 3

///enum string

enum ExtTypes  {
    odc = "app",
    dcs ="xxx",
    en = "ppp"
}

//const Enum

const enum Subscrippiton {
    active,
    expired
}


//Intersection & union types

let coffeSize: 'medium' | "large"

coffeSize = 'medium'
coffeSize = 'small'

//Union type

let stringOption: string | number


//Unknow values

let values: string | undefined


///iteracion types

interface Knife {
    slice():string
}

interface Scissors {
    cut():string
}

type multiTool = Knife & Scissors 

function useTools(tool:multiTool) {
    tool.cut()
    tool.slice()
}

const swissArmyKnife :multiTool = {
    slice() {
        return 'slice'
    },
    cut( ) {
        return 'cut'
    }
}


//Inferencja
let message: string

let counter = 0
counter = 'xxx'


//Asercja typow i aliasow 

type Game = {title:string,genre:string,released:boolean}

const game: Game = {title:'gra',genre:'xx',released:true}
const serializeGame = JSON.stringify(game);

const gameObj = JSON.parse(serializeGame) as Game // tak robimy lub <Game>JSON.parse(serializeGame)


const input = <HTMLInputElement>document.querySelector('.input');

//alias 

type CoffeSizes = 'medium' | 'large'

function order(coffe:CoffeSizes ) {
    return 'order'
}


//Parametry funkcji 

type Song { title:string,duration:number,genre:string}
const song = {title:'xxx',duration:1,genre:'xxx'}

function play(song: Song) {
    return `Play ${song.duration}`
}

play(song)

// Parametry opcjonalne - na samym koncu

function addPlay(song:Song, playlist?:string, foo?:string = 'Default') {}


//Typy funkcji

let numberToText: (num:number) => string
numberToText = (num) => num.toString()

numberToText(12)

type Essa = {id:number,title:string,}

const essy = [
    {id:1,title:'a'}
    ,
    {id:2,title:'b'}
]

type updateEssa = (id:number,data:Essa) => Essa | Boolean

const update: updateEssa = (songId,data) => {
    const index = essy.findIndex(({id}) => id == songId)

    if(index > -1) {
        return (essy[index] = data)
    }

    return false
}

//Typy - any,void,never

//any - dowolny typ zmiennej

let password:any

password = 123
password ='222'


// void - type (undefinded,null) - gdy nic nie zwraca

let mess: string ='I kno'

let show = (mess:string): void => {
    console.log(mess)
}

//never  type - wartosc nigdy nie wystepuje 


function error(message:string):never {
    throw new Error(message)
}

function wathc():never {
    while(true) [
        console.log('watching')
    ]
}

//Interfejsy - kontrakt opisujacy w jaki sposob ma wygldac typ funkcja

//Typy vs Interface ( interfejs tworzy nowa nazwe typu)

type Player = {
    name:string
}

function showMe(player:Player) {}

interface Games {
    name:string
}

function showYou(game:Game) {}

//computed properties


// Merge interface 
interface User {
    name:string
}

interface User {
    id:number
}

function info(user:User) {} //polaczony interface w typach nie mozna tak zrobic

// Interfejsy moga po sobie dziedziczyc

interface Admin extends User {
    is_admin:boolean
}

// rozserzanie wielu interfejsu

interface SuperAdmin extends Admin,User {
    godmood: boolean
}

//duck typing 

interface Readable {
    page:number
}

interface Book {
    title:string,
    pages:number
}

//Interfejsy funkcji

//Parametry ktore przyjmuje funkcja
interface Playable {
    name:string
    play?():string
}

//lub calej striktury funkcji i co zwraca
interface Play {
    (media:Playable):string
}

let playMedia: Play
playMedia = function play(media:Playable):string {
    if(media.play) {
        return media.play()
    }
    return media.name
}

const movie: Playable = {
    name:'Lod',
    play() {
        return 'xx'
    }
}
