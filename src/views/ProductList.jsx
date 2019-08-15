import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row } from "react-bootstrap";
import { List, Avatar, Button, Skeleton, Icon } from "antd";

//TRANSACTIONS
import { FetchData } from "../data-store/transactions";
//ACTIONS
import { FetchActions } from "../data-store/actions";
import { Ecomm } from "../data-store/schema.string";

class ProductList extends Component {
  //COMPONENT LIFE-CYCLES
  componentWillMount() {
    const { fetchData } = this.props;
    let data = {
      where: {},
      order: "createdAt_DESC"
    };
    fetchData(Ecomm.fetchEcommItems, data);
  }

  componentWillUnmount() {
    this.props.resetfetchData();
  }

  render() {
    const {
      products: { data, fetched, fetching }
    } = this.props;

    let productList;

    productList = (
      <List
        className="demo-loadmore-list"
        loading={fetching}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">more</a>
            ]}
          >
            <Skeleton avatar title={false} loading={fetching} active>
              <List.Item.Meta
                avatar={
                  <Avatar
                    shape="square"
                    size={120}
                    icon="user"
                    src={item.image}
                    title={item.name}
                  />
                }
                title={`${item.name} | ₱ ${item.price.toFixed(2)}`}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );

    return (
      <div className="content">
        <Grid fluid>
          <Row>{productList}</Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.FetchProp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: (schemaName, data) => {
      dispatch(FetchData(schemaName, data));
    },
    resetfetchData: () => {
      dispatch(FetchActions.fetchDataReset());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
