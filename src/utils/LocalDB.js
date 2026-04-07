

const getAllReadLocalDB = () => {
    const allReadList = localStorage.getItem("readList")
    // console.log(allReadList, "ReadList local DB");
    
    if(allReadList) return JSON.parse(allReadList);
    return [];
}

const addReadListLocalDB =(book) => {
    const allBook = getAllReadLocalDB();
    const isAlreadyExist = allBook.find(bk=>bk.bookId === book.bookId)
    if(!isAlreadyExist){
        allBook.push(book)
        localStorage.setItem("readList", JSON.stringify(allBook))

    }
}

export{getAllReadLocalDB, addReadListLocalDB}