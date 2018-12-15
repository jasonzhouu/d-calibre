import booklist from './booklist.json'

const writeToNEM = (ISBN, contentID) => {
    // TODO: use API
    console.log(`write to NEM, ISBN: ${ISBN}, content ID: ${contentID}`)
}

const getBookList = () => {
    // TODO: use API
    return booklist;
}

export {writeToNEM, getBookList}