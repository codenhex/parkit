import * as lang from './lang.json';

export function trans(string, language) {
    if(!string){
        return;
    }

    let lan = language;
    if(!language) {
        lan = 'en';
    }

    if(lang[string]){
        return lang[string][lan] ? lang[string][lan] : string;
    } else {
        return string;
    }
}