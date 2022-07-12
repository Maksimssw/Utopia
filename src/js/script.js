import hamburger from './modules/hamburger';
import introAnime from './modules/introAnime';
import header from  './modules/header';
import toolsAnime from './modules/toolsAnime';
import internetAnime from './modules/internetAnime';
import ecologyAnime from './modules/ecologyAnime';

window.addEventListener('DOMContentLoaded', function(){
    hamburger();
    introAnime();
    header();
    toolsAnime();
    internetAnime();
    ecologyAnime('.ecology__text', '.ecology__ph')
})