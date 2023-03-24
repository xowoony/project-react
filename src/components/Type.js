// 오브젝트 작성
const Group_obj = {
    "별점순" : "minimum_rating=8",
    "애니메이션" : "genre=animation",
    "로맨스" : "genre=romance",
    "코미디" : "genre=comedy",
    "스릴러" : "genre=thriller"
};

// 키, 값 정의
const Group_key_arr = Object.keys(Group_obj);
const Group_obj_arr = Object.values(Group_obj);


// export
export {Group_key_arr,  Group_obj_arr, Group_obj};

