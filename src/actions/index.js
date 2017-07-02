import axios from 'axios';

export function loginfunction() {
		return{type:'TOGGLELOGGEDIN'}
    }
	
export function setplanets(planets){
return{
type:'SETPLANETS',
payload:planets
}
}