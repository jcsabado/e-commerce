import gql from "graphql-tag";

export const Ecomm = {
  fetchEcommItems: gql`
    query($where: carConstraints, $order: [carOrder!]) {
      objects {
        findcar(where: $where, order: $order) {
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
