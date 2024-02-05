import client from "@/app/apollo-client";
import { gql } from "@apollo/client";

export default async function getData() {
  const query = await client.query({
    query: gql`
      query Query {
        countries {
          code
          name
          native
          capital
          emoji
          currency
          phone
          continent {
            name
          }
          states {
            name
          }
          languages {
            code
            name
          }
        }
      }
    `,
  });

  return query.data.countries;
}
