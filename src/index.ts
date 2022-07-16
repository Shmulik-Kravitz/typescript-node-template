import fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";

const start = async () => {
  try {
    const publicAddress = "0.0.0.0";
    const port = 3000;

    const server = fastify();

    server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send(`Hello from ${request.url}`);
    });
    await server.listen({
      port,
      host: publicAddress,
    });

    console.log(`Server listening at http://localhost:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
