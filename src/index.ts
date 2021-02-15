import fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";

const server = fastify();

server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send(`Hello from ${request.url}`);
});

server.listen(80, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
