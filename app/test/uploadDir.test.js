import chai from 'chai'

const expect = chai.expect;


import checkIfUploadDirectoryExists from '../server/helpers/uploadDirectory/checkIfUploadDirExists'
import createUploadDirectory        from '../server/helpers/uploadDirectory/createUploadDirectory'
import getDate                      from '../server/helpers/uploadDirectory/getCurrentDate'
import getPathToUploadDir           from '../server/helpers/uploadDirectory/getPathToUploadDir'


describe('upload directory tests', () => {
    it('should check if uploadDir exists, if not, create them', () => {
        var ifDirExists = checkIfUploadDirectoryExists();

        expect(ifDirExists).to.be.undefined;
    })

    it('should create upload directory', () => {
        var createUploadDir = createUploadDirectory();

        expect(createUploadDirectory).to.be.ok;
        expect(createUploadDirectory).to.not.be.undefined;
    })

    it('returns string of current date', () => {
        var date = getDate();

        expect(date).to.have.lengthOf(10);
        expect(date).to.be.a('string');
        expect(date).to.not.be.undefined;
    })

    it('returns string of current upload directory', () => {
        var pathToUploadDir = getPathToUploadDir;

        expect(pathToUploadDir).to.be.a('string');
        expect(pathToUploadDir).to.have.length.below(50);
        expect(pathToUploadDir).to.have.length.above(40);
        expect(pathToUploadDir).to.have.string('uploads');
        expect(pathToUploadDir).to.not.be.undefined;
    })

})
