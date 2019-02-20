import { Base64 } from "js-base64";


const urlJira = 'api/jira/';
const urlCertif = 'api/certificates/';
const urlTicketJira = '/rest/api/2/issue';
const urlLoginJira = '/rest/auth/1/session/';
const urlRegister = '/api/users';
const urlRegisterJira = '/api/jira';
const urlLogin = '/api/auth'

const objJsonB64 = Base64.encode('evarist.jaume@gmail.com' + ':' + '12345678');
const username = 'evarist.jaume@gmail.com';
const password = '12345678';
const bodyLogin = { username, password };


export {
    urlJira, urlCertif, urlTicketJira, urlLoginJira,
    urlRegister, urlRegisterJira, urlLogin, objJsonB64,
    bodyLogin
};