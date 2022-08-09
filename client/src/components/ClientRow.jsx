import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectsQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetch hace una petición más
    refetchQueries: [
      { query: GET_CLIENTS },
      { query: GET_PROJECTS }
    ],

    // update cache, solo actualiza el cache estilo redux
    // update(cache, { data: { deleteClient } }) {
      // 1. read the current clients of the cache
      // you could wrap this in a try/catch - es posible que la query no este en el cache
      // const { clients } = cache.readQuery({ query: GET_CLIENTS });

      // 2. escribiendo la query del cache
      // cache.writeQuery({
      // query: GET_CLIENTS,
      //   data: {
      //     clients: clients.filter((client) => client.id !== deleteClient.id),
      //   },
      // });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
