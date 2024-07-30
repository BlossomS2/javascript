let shoppingList = ["우유", "계란", "아이스크림", "목살"];

// 배열의 각 요소를 검사하여 '목살'을 '삼겹살'로 변경
shoppingList = shoppingList.map((item) => (item === "목살" ? "삼겹살" : item));

console.log(shoppingList);
// 출력 : [ '우유', '계란', '아이스크림', '삼겹살' ]
