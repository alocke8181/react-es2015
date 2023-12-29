function choice(items){
    const itemLength = items.length;
    let randIdx = Math.floor(Math.random() * itemLength);
    return items[randIdx];
};

function remove(items, item){
    for (let i = 0; i<items.length; i++){
        if(items[i] === item){
            return [...items.slice(0,i),...items.slice(i+1)];
        };
    };
};

export {choice, remove};