import fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";

const server = fastify();

server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send(`Hello from ${request.url}`);
});

const publicAddress = "0.0.0.0";

server.listen(80, publicAddress, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address.replace(publicAddress, "localhost")}`);
});
