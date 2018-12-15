import booklist from './booklist.json'

const writeToNEM = (ISBN, contentID) => {
    console.log(`write to NEM, ISBN: ${ISBN}, content ID: ${contentID}`)
}

const getBookList = () => {
    console.log("get from book list from NEM")
    return booklist;
}

export {writeToNEM, getBookList}