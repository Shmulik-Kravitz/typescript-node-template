import fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";

const server = fastify();

server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send(`Hello from ${request.url}`);
});

const start = async () => {
  try {
    const publicAddress = "0.0.0.0";
    const port = 80;

    await server.listen({
      port,
      host: publicAddress,
    });


    console.log(`Server listening at http://localhost:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
