const count = 0;

export default function reducer(state = count,action){
    const {type,playload} = action;
    switch(type){
        case "INCREMENT":
            return count+1

            case "DECREMENT":
                return count-1;
                default:
                    return count;
    }
}