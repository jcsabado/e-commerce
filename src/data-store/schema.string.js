import gql from "graphql-tag";

export const Ecomm = {
  fetchEcommItems: gql`
    query($where: carConstraints) {
      objects {
        findcar(where: $where) {
          count
          results {
            objectId
            name
            description
            price
            image
            createdAt
          }
        }
      }
    }
  `,

  addEcommItems: gql`
    mutation($fields: carCreateFields) {
      objects {
        createcar(fields: $fields) {
          objectId
          createdAt
        }
      }
    }
  `
};
