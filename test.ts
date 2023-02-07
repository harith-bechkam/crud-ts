import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from './models/user-model';
import axios from 'axios';

let should = chai.should();
chai.use(chaiHttp)

describe('POST API', () => {
    it('create user record', async () => {
        const result = await axios.post('http://localhost:8080/api/users/add', {
            firstName: "firstName",
            lastName: 'lastName',
            email: 'email'
        })
        expect(result.status).to.equal(200);
        expect(result.data.message).to.equal('Data inserted successfully');

        should.exist('lastName');
        // .then((resp: any) => {
        //     resp.data.should.have.property('firstName');
        //     resp.data.should.have.property('lastName');
        //     resp.data.should.have.property('email');
        //     expect(resp.status).to.equal(200);
        //     done();
        // })
    })

})



describe('GET API', () => {
    it('user list', async () => {
        const result = await axios.get('http://localhost:8080/api/users/list'
        )
        expect(result.status).to.equal(200);

    })

})


describe('PUT API', () => {
    it('user update', async ()=> {
       const result=await axios.put('http://localhost:8080/api/users/update', {
            id: "63e29f703039fed123c23d3a",
            firstName: "firstName---)",
            lastName: 'lastName',
            email: 'email---'
        })
        expect(result.status).to.equal(200);
            
    })

})

describe('DELETE API', () => {
    it('user delete', async () => {
        let result = await chai.request('http://localhost:8080/api/users')
            .delete('/delete')
            .send({
                "id": "63e29f703039fed123c23d3a"
            })
        expect(result).to.have.status(200)
        // expect(result.data.deletedCount).to.equal(1);
    })

})


// describe('DELETE API', () => {
//     it('group delete', async ()=> {
//         const result=await axios.delete('http://localhost:8080/api/users/delete', {
//             id: ""
//         })
//         expect(result.status).to.equal(200);
            
//     })

// })
