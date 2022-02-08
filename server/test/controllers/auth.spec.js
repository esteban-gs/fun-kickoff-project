const chai = require("chai");
const chaiHttp = require("chai-http");
const {app} = require("../../bin/www");


chai.use(chaiHttp);
chai.should();

describe("AUTH /POST LOGOUT", () => {
  it("it should return 200 and message", (done) => {
    chai
      .request(app)
      .post(`/auth/logout/`)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.a('string')
        res.text.should.equal("You have successfully logged out");
        done();
      });
  });
});
