import http from 'node:http'
import {Readable, Writable, Transform, Duplex} from 'node:stream'

class InverseNumber extends Transform {
  _transform(chunk, encoding, callback){
    const tranformed = Number(chunk.toString() * -1)
    console.log(tranformed)
    callback(null, Buffer.from(tranformed.toString())) //RETORNO
  }
}

const server = http.createServer(async (req, res) => {
  // juntando os pedacinhos para fazer algo depois
  const buffers = []
  for await (const chunk of req){
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()
  console.log(fullStreamContent)
  return res.end(fullStreamContent)
  // return req.pipe(new InverseNumber()).pipe(res)
})

server.listen(3334)