import chai from 'chai'
import chaiHttp from 'chai-http'

import server from '../../app'

const should = chai.should()

chai.use(chaiHttp);

describe('api', () => {
    it('should list all files on /files get', (done) => {
        chai.request(server)
            .get('/api/files')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body[0].should.have.property('_id');

                done();
            })
    })
})
