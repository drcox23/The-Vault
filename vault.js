'use strict';
module.exports = function() {
  
    console.log('aloha');
    const mySecretVault = {};
    
    const setValue = function(key,value){
        if(!key){
            return null;
        }else{
        mySecretVault.globalKey = key;
        mySecretVault.globalValue = value;
        }
    }
    
    const getValue = function(setKey){
        if(!setKey){
            return null
        }else if (setKey !== mySecretVault.globalKey){
            return null;
        }else if (setKey === mySecretVault.globalKey){
            return mySecretVault.globalValue;
        }
    }
    

    return {
        getValue: getValue,
        setValue: setValue
    }
console.log(mySecretVault); 
    
};