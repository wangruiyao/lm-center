import {RSAKeyPair, encryptedString} from 'utils/RSA/RSA';
import 'utils/RSA/Barrett';
import {setMaxDigits} from 'utils/RSA/BigInt';
const rsa_n = "b3ef1a648c8bae61b79a6e6234ab49b0dcde72b04b91294cba0d606dae0ad05829d82591cf9f8dd2fd0bd834d25b30cb3243bb9683ce45045a8195b2eac2c258e4c46eb8176de06cc63e770e2cb55ad1b1125a4cc66de5dcab9fba615ceee58f8a4bd492da1173b2644055a7b8144e56d8aad17a83bf5d22f4e0d808cea41133";
setMaxDigits(130);
const key = new RSAKeyPair("10001", "", rsa_n);
// console.log(key)
// const rsapassword = encryptedString(key, encodeURIComponent('111'));
// console.log(rsapassword);

export function RSA(val) {
  return encryptedString(key, encodeURIComponent(val))
}