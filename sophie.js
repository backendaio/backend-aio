const adyenEncrypt = require('node-adyen-encrypt')(18);
const adyenKey = '10001|A237060180D24CDEF3E4E27D828BDB6A13E12C6959820770D7F2C1671DD0AEF4729670C20C6C5967C664D18955058B69549FBE8BF3609EF64832D7C033008A818700A9B0458641C5824F5FCBB9FF83D5A83EBDF079E73B81ACA9CA52FDBCAD7CD9D6A337A4511759FA21E34CD166B9BABD512DB7B2293C0FE48B97CAB3DE8F6F1A8E49C08D23A98E986B8A995A8F382220F06338622631435736FA064AEAC5BD223BAF42AF2B66F1FEA34EF3C297F09C10B364B994EA287A5602ACF153D0B4B09A604B987397684D19DBC5E6FE7E4FFE72390D28D6E21CA3391FA3CAADAD80A729FEF4823F6BE9711D4D51BF4DFCB6A3607686B34ACCE18329D415350FD0654D';
const options = {};

function encrypt_data(site_url , cart_id , card_number , card_cvc , card_month , card_year , holder_name){

    const cardData = {
        //number: `${card_number}`, // 'xxxx xxxx xxxx xxxx'
        cvc: `${card_cvc}`, //'xxx'
        holderName: `${holder_name}`, // 'John Doe'
        //expiryMonth: `${card_month}`, //'MM'
        //expiryYear: `${card_year}`, // 'YYYY'
        generationtime: new Date().toISOString() // new Date().toISOString()
    };

    const cardData_1 = {
        number: `${card_number}`, // 'xxxx xxxx xxxx xxxx'
        //cvc: `${card_cvc}`, //'xxx'
        holderName: `${holder_name}`, // 'John Doe'
        //expiryMonth: `${card_month}`, //'MM'
        //expiryYear: `${card_year}`, // 'YYYY'
        generationtime: new Date().toISOString() // new Date().toISOString()
    };

    const cardData_2 = {
        //number: `${card_number}`, // 'xxxx xxxx xxxx xxxx'
        cvc: `${card_cvc}`, //'xxx'
        holderName: `${holder_name}`, // 'John Doe'
        //expiryMonth: `${card_month}`, //'MM'
        //expiryYear: `${card_year}`, // 'YYYY'
        generationtime: new Date().toISOString() // new Date().toISOString()
    };

    const cardData_3 = {
        //number: `${card_number}`, // 'xxxx xxxx xxxx xxxx'
        //cvc: `${card_cvc}`, //'xxx'
        holderName: `${holder_name}`, // 'John Doe'
        expiryMonth: `${card_month}`, //'MM'
        //expiryYear: `${card_year}`, // 'YYYY'
        generationtime: new Date().toISOString() // new Date().toISOString()
    };

    const cardData_4 = {
        //number: `${card_number}`, // 'xxxx xxxx xxxx xxxx'
        //cvc: `${card_cvc}`, //'xxx'
        holderName: `${holder_name}`, // 'John Doe'
        //expiryMonth: `${card_month}`, //'MM'
        expiryYear: `${card_year}`, // 'YYYY'
        generationtime: new Date().toISOString() // new Date().toISOString()
    };

    const cseInstance = adyenEncrypt.createEncryption(adyenKey, options);
    cseInstance.validate(cardData);
    const dataEncrypted = cseInstance.encrypt(cardData);
    const encrypted_card_number = cseInstance.encrypt(cardData_1);
    const encrypted_card_month = cseInstance.encrypt(cardData_3);
    const encrypted_card_year = cseInstance.encrypt(cardData_4);
    const encrypted_card_cvc = cseInstance.encrypt(cardData_2);

    //console.log(dataEncrypted);
    var data = JSON.parse(`{\"preferredLanguage\":\"en\",\"termsAndCondition\":false,\"deviceId\":\"0400tyDoXSFjKeoNf94lis1ztrjQCvk297SBnrp/XmcfWoVVgr+Rt2dAZIo7BJIRIWDNtjiuvPP9Vk+xH1ZPRIwM6njw/ujAyYdbGKZt5JLThTvosS1xgSAgNfLEMokGoGJxKisRfx9t41x0laFPi9NzJZ4iDNiZMrA28cFCb3XpK0K8hZCSHGBUGQbz44XiMf/eY92hNSmr+k28EssPaX5qswX9wWLJD32GEp48DVRl0oBkPCJz7Ln+v5KTIBvOIMzuTzEBdNLiXsPV6scyeMvquCgW2ZaJPkK1BCjLx9EGZrS/ofM/kndRI5YwJVsFx3E/oYDerSQOKdZwPpPV0ZSMv6EAzhl78D5AqLJ+r9x/cici41oWzw16W8zlKi1IZ+wLeRIDNv9qvaj7n487DltNoMQPcd6kSm4zFgKHJIVRiKzvsD8Ae2HMhAjTuni0YYcF7yZHbT+hap+GncZZm+V9P8Cq9DH/qIFmOg9w7I7EUjZ91ruChettEItPwFgH8sMC1PXpN4zl2IQd/tZS2Kh2RIICZj2KhOr29B1T6FTbdMeFmhieo+uBrM3X8S8pWAYm7BFQVjvF0CKqWvTbz/c+rzGP9L8T+b5eAXx6/REkKVY57RHFZltZDN6b95QZ4EmpGTB8Kq+X3ZgzgbdjrNLFHip8KizAt67AZSJm2e3lMb4OLxHrBU1X2vqqjESqbaBDvX9j17x6IHjtxpPWlswtaofLFIaU35cbSNfOTvsgtn95SxDtE2suujWRMoizXj3piSkiHcDvTuWbZ7blJBujU5BiAvncehUpp7NrMKv5dYYco0JX8JW6xeZjVekMYG3JYXyFHBbsmyyzb0vSwWRA+eSMeWgCk0M8kgQVobtOy5nu7pRmssxc1n3Rzh1ozHM1w5rNRhjMFvlSwejOX5dhKGYrsu13rc4RCbryu9G8AaQuMlyeB2y1pxmFnPAJmrzwzku5eLJby2csMsT7jUEhgZUZw7JihEpKZd3dEle8K++UxzdIq4QeeE8n5eMDiQTaB4LjwVUTTO8xk2QshqnbtTp+eCViUigfiQcp7l8EoPVZOWa7AmiMkZs+tc4cxQdXEkjojeY23vPI8I7OQmtv8AXYYpvbyv1Lva3jH3nbRHFsVWEIaCzMHcO8ldW2m1EPRNmBDAZAU2gytgKeNyoUj2KNbKSCekZHuH801FCkBCkXFrxLDHXdvnCybEFcse2RrZVhUqoDDvpR8HbEOhS0NC35egTG/V0l/HRPbnP2fhDCjrWZsdUi8H2i/5ws6M6+\",\"cartId\":\"6894b17a-e8a9-4ebf-928b-038aa36159ca\",\"encryptedCardNumber\":\"adyenjs_0_1_18$HBkkHnPC4kmYbpoiCIRiKk/zrnfa9DljFJcZmqdMaCgn8bQO+64AM/RzvGgG4oP/cB2vGCjTu7Z+P60puG67fVxXDdYJLVHAsotJ5TuqBqz+3GmRAM8nxd1ySOQqWTRZzMMPHRg9oPMdzCyCzGKjThbh77uzwB6eE/6i6jA3su8en+hiEl2JWfwjXT7ruawxTAXEECK5LWwxFSF4YNhpIERKowMMdKXl12pGDT5GaMxjsgGfe+q9JIhCV1UNvVA7HQrJ7jxAj+9xpe38at0YHxSsW0kYR9eO23qcepSY946t6hLImgGMZ/IzDb8K3R0ymPnJU3yR3EDTnuJ4apHo1A==$hfB4jwzZCtDXP/tvce9xUuQk7sAeg3dStkYQZendmfhw4YOw1HNw6ewFNS4IFvAsCz0Wh53/Xv/QhhsjpBDEp4H+Put8BgA/ySDQojoARLoqVR2fGcXauzrXhwobOnw0LCqHOKvMvSMwwyCdzEnndyKm5kzP3MO0vHBnUXWJIBu/U1p0yGse4uYyNxKsqfSkxz5Ptb5MqAvp6iEy6dhye/fyjO1jt+hHVoYtPiSnmh9ktmx12cHaQiRC5jFQmrIBiBDsB4w+zaZ3Zq8vJUfZwvfLdRXqDrxc1SzagbFUe8Ze5S/b9XHmJ55FRTBeGXl+SvdImrMvzezfGKvMaNV+hgzJLfd2UhV0qRapPe3NFtM2WgRoZwxh76AloanzCG+ofvyZti/DpukF2nI4Twr7wFBeVy+qsL4fUi1+xQjqjXUJYFIl/pyUt2R5moc6JyLGUSBcyj9rhd2XisA=\",\"encryptedExpiryMonth\":\"adyenjs_0_1_18$S4umZXjaH9Kw3bXS+D0fRmB2arNFk9DabQR0bysw73dTX40IjNhC7WESXJ5gbhNmev/zAPRFMRFt6MSKX5bMYSOZUVh06k503y6hmoxOab7IBePvsoK7nDMtNLGtxfpGOzK6ZTpcmFe9Mlw9MT4w80BWZH3b1UbMEEO4VRN+xFu8ORkqfiXA8p7wduVNB1FoKPQPXxWVfdXJqCDhnnCEgQ5N9igqYlcZ8YZLRawAy0uon/stQX/Sa9CUJrnCv8RG3GSf+MvrindFFEujCiSvj2f0sE/afQyZQj4BPSm1NLp9nkJo9lVLN/KbA/5CVZaCh0aQcQ4vmAPOSSMg87MaCw==$Czw+ftpDWnNnbJFdEMbEYFg2JuJxB78mlbGLfoJbQmKyti4OTVm59dIEmRiIruj0NHHao/GMkfOX1Pw6SELOX4+x6Mg39ICMS2ZLKNwdEaUbDNZ0HLFc9QVSKuhjUF6qMnsm//LrVSf6WfLD+dzkz9vh3xQLG/xlkXhRdD5iTTgqR1hB8aJIVbXsJFc8frewtK8O1z5k0WhjVMeQG5R6j3Z9SPcNnaV/0yU3rA9xnVCCp5wzk94XgEAAEBAnsJWK6K8DtoFcuL9YoSHkDyWh+aO4+XladIUhgPez/q+ecl2UD3VLqQzudCgiJ1UA6gTi3glL4JIzE7iCoAmHGbD1rpU=\",\"encryptedExpiryYear\":\"adyenjs_0_1_18$bkdP4g1JrSnWC2FpSsDDtwDDL3WydE0XPdk5v9o1Ch2B3+6h6FKmoVhxi8JhxtQ+7YH6TJnlk6UjxVX2jdRqdfthSvZXHQwYGmrhDbTiDX8fCTZdEyhMooACU3YOhgXrT2dEQ5ty6z+feQ0mEo1BGKcrcOIwAVWb7M8VQ9UwNbF+zmJXAw0xpXY2zDX5vIEjZVxwNdxrpjIpAUHmutU49uG9voRoNa9plMhtojFd8vtOO/X+wgkpWsQ1lVFVlVn+Omh8lhE1GbSca4ix4fLRANosakk+c/2ktY/s2NK9iJ6cnheFJYyGfEzE8ydOShLbVFFa/E8jBfqEO/ckb3aLQg==$/JELsWNTiJ6oHP2F58t9PTXg+58SZi70cHQ29u2v/9sdwPiH2yiZAyOdVx4dSetz1tqlGLteoCFLODOBmoPnp0pk668uJPdACBYzL0R7Fv3ITZYV/XUC8VmBRAAAVYK7oBCnJzgb1zlIRbLfoZPIlbrR9/f49ME+jfXsYi1UF+UX7wfeKpLlYJdfIeu6LrdT+cOu2NYQz9g5BLD3wjZ2qi9MZFIoCdjQ/ZAobxlavK+FB4FdJECBSKxsds8Uk66jHuTrpPQK44N+HVQIBj1b3lo3pN8FTcrLEuoPccchZR51SwTSdAOGQUZr20+HUIABncf+Qs19KoZ4t+9QU1Mr35hy\",\"encryptedSecurityCode\":\"adyenjs_0_1_18$Z9REoNfeobtBvgSOpyNB/4wPrDwOASU+Wc4HuU15yifOsUHP4FTaPJH8w/pvVuibkg2Ec5N10+ntJ9uI+rsinLEUzhELAp0q7NNlatKlrus2i10iUwCHzV0XVP1K2RodMJGNZnisUknlM+BxfwoRfJpJBp7lo0n9jTEqCdd6m2oiPcV9IVyJqPPB85J5/biftUtkJAfRTRmw4wP6C3/R63YCBMqJYuAcld5/6UUkBX6EHiNL/wO9DBmXIMAAzsyIjrSMeJegi+MYY4Bk1MN8IRGQKjALI8U1tJfCUnuASEd7dDov+1EVW0dRk+GnTTAD4C2E4PfAAHcX3ZduUNVEIw==$H1ASh5IvLg5FCoXJLwm+2mID9/53CaWe0SdGrcfkuLAp1AN8ifR4/IZJopS8BYybogKESdapo5uiONsZMamfK9cJCu5uxZ3eLanZ0yshhefQPDrJu2NQ5z5beYWjyxICTJ+zIf5WCAyRXg6nKbRVHWkIc9Y5OFRgcynviEZGrSZoygvIyUubH9s1B8uqmSo0jYW5RAQqMQ9xtXL2NcmkrB+wLvVU/L6lFs+3Js52ToZ0vnXQAI/pRUy9luAGeLWGdWWiCjsztMgTwAiqht/7fcDb+Fwh6ILfCm1UKb/Y9QwIU2uUbknyYBhp+TMyH6YXQEstZrCkq4RPmw==\",\"paymentMethod\":\"CREDITCARD\",\"returnUrl\":\"https://www.footlocker.com/adyen/checkout\",\"browserInfo\":{\"screenWidth\":1920,\"screenHeight\":1080,\"colorDepth\":24,\"userAgent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36\",\"timeZoneOffset\":240,\"language\":\"en-US\",\"javaEnabled\":false}}`);
    data['cartId'] = cart_id; 
    data['encryptedCardNumber'] = encrypted_card_number;
    data['encryptedExpiryMonth'] = encrypted_card_month;
    data['encryptedExpiryYear'] = encrypted_card_year;
    data['encryptedSecurityCode'] = encrypted_card_cvc;
    data['returnUrl'] = site_url + 'adyen/checkout';

    return data;

};

module.exports.encrypt_data = encrypt_data;


//encrypt_data('https://www.footlocker.com/cart' , '1234' , '4548611705160625' , '123' , '05' , '2024' , 'bach nguyen')