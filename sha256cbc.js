async function DynamicOpenSSL(text, type){
    let ret = '';
    try {
        let password = process.env.KEY_DYNAMIC_PASS
        let iv = process.env.KEY_DYNAMIC_IV
        var sapi = require('crypto')
        if(type=='d'){
            const encKey = sapi.createHash('sha256').update(password).digest('hex').substr(0, 32);
            const newiv = sapi.createHash('sha256').update(iv).digest('hex').substr(0, 16);
            
            const finaltext = Buffer.from(text,'base64').toString('utf8')
            let decipher = sapi.createDecipheriv('aes-256-cbc', encKey, newiv); 
            let decrypted = decipher.update(finaltext, 'base64', 'utf8');
            decrypted += decipher.final('utf8');
            ret = decrypted
            return ret;
        } else {
            const encKey = sapi.createHash('sha256').update(password).digest('hex').substr(0, 32);
            const newiv = sapi.createHash('sha256').update(iv).digest('hex').substr(0, 16);

            const cipher = sapi.createCipheriv('aes-256-cbc', encKey, newiv);
            let encrypted = cipher.update(text, 'utf8', 'base64');
            encrypted += cipher.final('base64');

            let new_enc = Buffer.from(encrypted).toString('base64');
            ret = new_enc;
            return ret;    
        }
    } catch (error) {
        return ''
    }
}


const DynamicOpenSSLe = await func.DynamicOpenSSL('rapid123', 'e')
const DynamicOpenSSLd = await func.DynamicOpenSSL(DynamicOpenSSLe, 'd')
console.log(DynamicOpenSSLe); //dWJNOW1nZytsMkx0NXlYTmpudWtqUT09
console.log(DynamicOpenSSLd); //rapid123
