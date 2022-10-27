import {franc,francAll} from 'franc'
import colors from 'colors'
import lang from 'langs'

const input = process.argv[2]
const langCode = franc(input)
try{

    const language = lang.where("3",langCode)
    console.log(language.name.green)
} catch (e){
    console.log('Sorry I don\'t get that language'.red);
}

