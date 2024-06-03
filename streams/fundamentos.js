// NETFLIX & Spotify

//Importação de clientes via CSV
// 1gb
// Readable Stream (recebendo aos poucos) // Writeable Stream (Enviando aos poucos)

// streams -> 
//process.stdin.pipe(process.stdout)

import {Readable, Writable} from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  _read(){
    const i = this.index++
    setTimeout(()=>{
    if(i > 100) {
      this.push(null)
    }else {
      const buf = Buffer.from(String(i))
      this.push(buf)
    }
  }, 1000)
  }// MÉTODO OBRIGATÓRIO
}
new OneToHundredStream().pipe(process.stdout)