const getStoreReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the read list');
    } else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        // already exist. do not add it
        console.log('already exists in the read list')
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export {addToStoreReadList, addToStoredWishList, getStoreReadList}