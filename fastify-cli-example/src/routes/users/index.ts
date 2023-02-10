import { FastifyPluginAsync } from "fastify";
import { getUserById, getUsers, User } from "../../clients/CoreClient";

interface UserByIdParams {
  id: string;
}

const users: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{ Reply: Array<User> }>("/", async function (request, reply) {
    const users = await getUsers();
    reply.send(users);
  });

  fastify.route<{
    Params: UserByIdParams;
    Reply: User;
  }>({
    method: "GET",
    url: "/:id",
    handler: async function (request, reply) {
      const user = await getUserById(request.params.id);
      if (!user) reply.notFound();

      reply.send(user);
    },
  });
};

export default users;
