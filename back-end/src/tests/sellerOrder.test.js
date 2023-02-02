const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const sellerOrderService = require('../api/Services/sellerOrderService');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/api/app');

describe('Testando as rotas do vendedor', () => {
  beforeEach(() => sinon.restore());
  afterEach(() => sinon.restore());

  it('Testando se o retorna o um array com os pedidos do vendedor responsável', async () => {    
    sinon
      .stub(sellerOrderService, "getOrderBySellerId")
      .resolves([{
        "id": 1,
        "userId": 3,
        "sellerId": 2,
        "totalPrice": "9.70",
        "deliveryAddress": "teste",
        "deliveryNumber": "teste",
        "saleDate": "2023-02-02T15:12:27.000Z",
        "status": "entregue"
      }])

    let postSellerOrder;
  
    try {
      postSellerOrder = await chai.request(app)
        .post('/seller/orders')
        .send({ id: 2 })
    } catch (error) {
      console.error(error.message)
    }

    const { body } = postSellerOrder;

    expect(body).to.be.deep.eq([{
      "id": 1,
      "userId": 3,
      "sellerId": 2,
      "totalPrice": "9.70",
      "deliveryAddress": "teste",
      "deliveryNumber": "teste",
      "saleDate": "2023-02-02T15:12:27.000Z",
      "status": "entregue"
    }])
  })

  it('Testando se retorna o pedido pelo id corretamente', async () => {
    sinon
      .stub(sellerOrderService, "getOrderById")
      .resolves({
        "id": 1,
        "totalPrice": "3.49",
        "deliveryAddress": "teste",
        "deliveryNumber": "teste",
        "saleDate": "2023-02-02T19:22:52.000Z",
        "status": "entregue",
        "products": [
          {
            "id": 11,
            "name": "Stella Artois 275ml",
            "price": "3.49",
            "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg",
            "SaleProduct": {
              "quantity": 1
            }
          }
        ],
        "seller": {
          "id": 2,
          "name": "Fulana Pereira",
          "email": "fulana@deliveryapp.com",
          "password": "3c28d2b0881bf46457a853e0b07531c6",
          "role": "seller"
        },
        "user": {
          "id": 3,
          "name": "Cliente Zé Birita",
          "email": "zebirita@email.com",
          "password": "1c37466c159755ce1fa181bd247cb925",
          "role": "customer"
        }
      });

      let postSellerOrder;

      try {
        postSellerOrder = await chai.request(app)
          .get('/seller/orders/1')
          .send({})
      } catch (error) {
        console.error(error)
      }
      
      const { body } = postSellerOrder;

      expect(body).to.be.deep.eq({
        "id": 1,
        "totalPrice": "3.49",
        "deliveryAddress": "teste",
        "deliveryNumber": "teste",
        "saleDate": "2023-02-02T19:22:52.000Z",
        "status": "entregue",
        "products": [
          {
            "id": 11,
            "name": "Stella Artois 275ml",
            "price": "3.49",
            "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg",
            "SaleProduct": {
              "quantity": 1
            }
          }
        ],
        "seller": {
          "id": 2,
          "name": "Fulana Pereira",
          "email": "fulana@deliveryapp.com",
          "password": "3c28d2b0881bf46457a853e0b07531c6",
          "role": "seller"
        },
        "user": {
          "id": 3,
          "name": "Cliente Zé Birita",
          "email": "zebirita@email.com",
          "password": "1c37466c159755ce1fa181bd247cb925",
          "role": "customer"
        }
      })
  })
})
