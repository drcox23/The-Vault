'use strict';
module.exports = function() {
  
    // console.log('aloha');
    const mySecretVault = {};
    
    const setValue = function(key,value){
        if(!key){
            return null;
        }else{
        mySecretVault[key] = value;
        }
    }
    
    const getValue = function(key){
        if((!key) || (typeof mySecretVault[key] == "undefined")){
            return null;
        }else{
            return mySecretVault[key];
        }
    }
    

    return {
        getValue: getValue,
        setValue: setValue
    }
console.log(mySecretVault); 
    
};