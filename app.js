// --- 데이터베이스 (Mock Data) ---
const ingredientsDB = [
    // --- 기본 식재료 ---
    { id: 'carrot', name: '당근', emoji: '🥕', type: 'fridge' },
    { id: 'onion', name: '양파', emoji: '🧅', type: 'pantry' },
    { id: 'potato', name: '감자', emoji: '🥔', type: 'pantry' },
    { id: 'garlic', name: '마늘', emoji: '🧄', type: 'pantry' },
    { id: 'egg', name: '계란', emoji: '🥚', type: 'fridge' },
    { id: 'beef', name: '소고기', emoji: '🥩', type: 'fridge' },
    { id: 'pork', name: '돼지고기', emoji: '🥓', type: 'fridge' },
    { id: 'chicken', name: '닭고기', emoji: '🍗', type: 'fridge' },
    { id: 'greenonion', name: '대파', emoji: '🥬', type: 'fridge' },
    { id: 'tomato', name: '토마토', emoji: '🍅', type: 'fridge' },
    { id: 'mushroom', name: '버섯', emoji: '🍄', type: 'fridge' },
    { id: 'cheese', name: '치즈', emoji: '🧀', type: 'fridge' },
    { id: 'rice', name: '밥', emoji: '🍚', type: 'pantry' },
    
    // --- 채소류 ---
    { id: 'cabbage', name: '양배추', emoji: '🥬', type: 'fridge' },
    { id: 'lettuce', name: '상추', emoji: '🥬', type: 'fridge' },
    { id: 'spinach', name: '시금치', emoji: '🌿', type: 'fridge' },
    { id: 'cucumber', name: '오이', emoji: '🥒', type: 'fridge' },
    { id: 'zucchini', name: '애호박', emoji: '🥒', type: 'fridge' },
    { id: 'sweetpotato', name: '고구마', emoji: '🍠', type: 'pantry' },
    { id: 'radish', name: '무', emoji: '🤍', type: 'fridge' },
    { id: 'chili', name: '고추', emoji: '🌶️', type: 'fridge' },
    { id: 'bellpepper', name: '파프리카', emoji: '🫑', type: 'fridge' },
    { id: 'broccoli', name: '브로콜리', emoji: '🥦', type: 'fridge' },
    { id: 'eggplant', name: '가지', emoji: '🍆', type: 'fridge' },
    { id: 'corn', name: '옥수수', emoji: '🌽', type: 'fridge' },
    { id: 'avocado', name: '아보카도', emoji: '🥑', type: 'fridge' },
    { id: 'leek', name: '부추', emoji: '🌿', type: 'fridge' },
    { id: 'bean_sprout', name: '콩나물', emoji: '🌱', type: 'fridge' },
    { id: 'host', name: '숙주', emoji: '🌱', type: 'fridge' },
    { id: 'perilla_leaf', name: '깻잎', emoji: '🍃', type: 'fridge' },
    { id: 'ginger', name: '생강', emoji: '🫚', type: 'pantry' },
    { id: 'lotus_root', name: '연근', emoji: '🪷', type: 'fridge' },
    { id: 'burdock', name: '우엉', emoji: '🥢', type: 'fridge' },
    { id: 'celery', name: '샐러리', emoji: '🥬', type: 'fridge' },
    { id: 'asparagus', name: '아스파라거스', emoji: '🎋', type: 'fridge' },

    // --- 과일류 ---
    { id: 'apple', name: '사과', emoji: '🍎', type: 'fridge' },
    { id: 'banana', name: '바나나', emoji: '🍌', type: 'pantry' },
    { id: 'lemon', name: '레몬', emoji: '🍋', type: 'fridge' },
    { id: 'orange', name: '오렌지', emoji: '🍊', type: 'fridge' },
    { id: 'strawberry', name: '딸기', emoji: '🍓', type: 'fridge' },
    { id: 'grape', name: '포도', emoji: '🍇', type: 'fridge' },
    { id: 'watermelon', name: '수박', emoji: '🍉', type: 'fridge' },
    { id: 'peach', name: '복숭아', emoji: '🍑', type: 'fridge' },
    { id: 'pear', name: '배', emoji: '🍐', type: 'fridge' },
    { id: 'melon', name: '멜론', emoji: '🍈', type: 'fridge' },
    { id: 'tangerine', name: '귤', emoji: '🍊', type: 'fridge' },
    { id: 'pineapple', name: '파인애플', emoji: '🍍', type: 'fridge' },
    { id: 'mango', name: '망고', emoji: '🥭', type: 'fridge' },
    { id: 'kiwi', name: '키위', emoji: '🥝', type: 'fridge' },
    { id: 'blueberry', name: '블루베리', emoji: '🫐', type: 'fridge' },
    { id: 'cherry', name: '체리', emoji: '🍒', type: 'fridge' },
    { id: 'coconut', name: '코코넛', emoji: '🥥', type: 'pantry' },

    // --- 고기/해산물 ---
    { id: 'sausage', name: '소시지', emoji: '🌭', type: 'fridge' },
    { id: 'bacon', name: '베이컨', emoji: '🥓', type: 'fridge' },
    { id: 'duck', name: '오리고기', emoji: '🦆', type: 'fridge' },
    { id: 'fish', name: '생선', emoji: '🐟', type: 'fridge' },
    { id: 'squid', name: '오징어', emoji: '🦑', type: 'fridge' },
    { id: 'shrimp', name: '새우', emoji: '🦐', type: 'fridge' },
    { id: 'crab', name: '게', emoji: '🦀', type: 'fridge' },
    { id: 'octopus', name: '문어', emoji: '🐙', type: 'fridge' },
    { id: 'clam', name: '조개', emoji: '🦪', type: 'fridge' },
    { id: 'lobster', name: '랍스터', emoji: '🦞', type: 'fridge' },
    { id: 'oyster', name: '굴', emoji: '🦪', type: 'fridge' },

    // --- 유제품/가공식품 ---
    { id: 'milk', name: '우유', emoji: '🥛', type: 'fridge' },
    { id: 'butter', name: '버터', emoji: '🧈', type: 'fridge' },
    { id: 'yogurt', name: '요거트', emoji: '🥣', type: 'fridge' },
    { id: 'tofu', name: '두부', emoji: '⬜', type: 'fridge' },
    { id: 'kimchi', name: '김치', emoji: '🌶️', type: 'fridge' },
    { id: 'dumpling', name: '만두', emoji: '🥟', type: 'fridge' },
    { id: 'fishcake', name: '어묵', emoji: '🍢', type: 'fridge' },
    { id: 'spam', name: '스팸', emoji: '🥫', type: 'pantry' },
    { id: 'tuna_can', name: '참치캔', emoji: '🥫', type: 'pantry' },
    { id: 'corn_can', name: '옥수수통조림', emoji: '🥫', type: 'pantry' },
    { id: 'icecream', name: '아이스크림', emoji: '🍦', type: 'fridge' },
    { id: 'chocolate', name: '초콜릿', emoji: '🍫', type: 'pantry' },

    // --- 탄수화물/면/빵 ---
    { id: 'riceteok', name: '떡', emoji: '🍡', type: 'fridge' },
    { id: 'bread', name: '식빵', emoji: '🍞', type: 'pantry' },
    { id: 'baguette', name: '바게트', emoji: '🥖', type: 'pantry' },
    { id: 'croissant', name: '크루아상', emoji: '🥐', type: 'pantry' },
    { id: 'noodle', name: '소면', emoji: '🍝', type: 'pantry' },
    { id: 'ramen', name: '라면', emoji: '🍜', type: 'pantry' },
    { id: 'pasta', name: '파스타면', emoji: '🍝', type: 'pantry' },
    { id: 'spaghetti', name: '스파게티면', emoji: '🍝', type: 'pantry' },
    { id: 'udon', name: '우동면', emoji: '🍜', type: 'fridge' },
    { id: 'glass_noodle', name: '당면', emoji: '🥢', type: 'pantry' },
    { id: 'cereal', name: '시리얼', emoji: '🥣', type: 'pantry' },
    { id: 'pancake_mix', name: '핫케이크가루', emoji: '🥞', type: 'pantry' },
    { id: 'flour', name: '밀가루', emoji: '🌾', type: 'pantry' },
    { id: 'bagel', name: '베이글', emoji: '🥯', type: 'pantry' },
    { id: 'pretzel', name: '프레즐', emoji: '🥨', type: 'pantry' },

    // --- 견과류/건해산물/기타 ---
    { id: 'peanut', name: '땅콩', emoji: '🥜', type: 'pantry' },
    { id: 'chestnut', name: '밤', emoji: '🌰', type: 'pantry' },
    { id: 'walnut', name: '호두', emoji: '🌰', type: 'pantry' },
    { id: 'almond', name: '아몬드', emoji: '🌰', type: 'pantry' },
    { id: 'honey', name: '꿀', emoji: '🍯', type: 'pantry' },
    { id: 'seaweed', name: '미역', emoji: '🌿', type: 'pantry' },
    { id: 'laver', name: '김', emoji: '⬛', type: 'pantry' },
    { id: 'sesame', name: '참깨', emoji: '🫘', type: 'pantry' },
    { id: 'dried_squid', name: '건오징어', emoji: '🦑', type: 'pantry' },
    { id: 'dried_anchovy', name: '멸치', emoji: '🐟', type: 'pantry' },

    // --- 양념/소스/가루 ---
    { id: 'soysauce', name: '간장', emoji: '🍾', type: 'pantry' },
    { id: 'gochujang', name: '고추장', emoji: '🏺', type: 'pantry' },
    { id: 'doenjang', name: '된장', emoji: '🏺', type: 'pantry' },
    { id: 'salt', name: '소금', emoji: '🧂', type: 'pantry' },
    { id: 'sugar', name: '설탕', emoji: '🧂', type: 'pantry' },
    { id: 'pepper', name: '후추', emoji: '🧂', type: 'pantry' },
    { id: 'sesame_oil', name: '참기름', emoji: '🫙', type: 'pantry' },
    { id: 'olive_oil', name: '올리브유', emoji: '🫙', type: 'pantry' },
    { id: 'cooking_oil', name: '식용유', emoji: '🫙', type: 'pantry' },
    { id: 'vinegar', name: '식초', emoji: '🍾', type: 'pantry' },
    { id: 'mayonnaise', name: '마요네즈', emoji: '🍶', type: 'fridge' },
    { id: 'ketchup', name: '케첩', emoji: '🍅', type: 'fridge' },
    { id: 'mustard', name: '머스타드', emoji: '🟡', type: 'fridge' },
    { id: 'oyster_sauce', name: '굴소스', emoji: '🦪', type: 'pantry' },
    { id: 'syrup', name: '물엿/올리고당', emoji: '🍯', type: 'pantry' },
    { id: 'chili_powder', name: '고춧가루', emoji: '🌶️', type: 'pantry' },
    { id: 'curry_powder', name: '카레가루', emoji: '🍛', type: 'pantry' },

    // --- 음료/주류 ---
    { id: 'water', name: '생수', emoji: '💧', type: 'pantry' },
    { id: 'juice', name: '주스', emoji: '🧃', type: 'fridge' },
    { id: 'cola', name: '콜라', emoji: '🥤', type: 'fridge' },
    { id: 'sprite', name: '사이다', emoji: '🥤', type: 'fridge' },
    { id: 'beer', name: '맥주', emoji: '🍺', type: 'fridge' },
    { id: 'soju', name: '소주', emoji: '🍶', type: 'fridge' },
    { id: 'wine', name: '와인', emoji: '🍷', type: 'pantry' },
    { id: 'coffee', name: '커피', emoji: '☕', type: 'pantry' },
    { id: 'tea', name: '티백차', emoji: '🍵', type: 'pantry' },
    { id: 'matcha', name: '말차', emoji: '🍵', type: 'pantry' }
];

const recipesDB = [
    { id: 1, title: '계란 볶음밥', time: '15분', reqIngredients: ['egg', 'rice', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=계란볶음밥', desc: '간단하고 든든한 한끼' },
    { id: 2, title: '돼지고기 김치찌개', time: '30분', reqIngredients: ['pork', 'onion', 'greenonion', 'garlic'], link: 'https://www.10000recipe.com/recipe/list.html?q=돼지고기김치찌개', desc: '얼큰하고 진한 국물 요리' },
    { id: 3, title: '소고기 뭇국', time: '40분', reqIngredients: ['beef', 'garlic', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=소고기뭇국', desc: '시원하고 담백한 국물' },
    { id: 4, title: '감자채 볶음', time: '20분', reqIngredients: ['potato', 'carrot', 'onion'], link: 'https://www.10000recipe.com/recipe/list.html?q=감자채볶음', desc: '아이들도 좋아하는 밥도둑 반찬' },
    { id: 5, title: '토마토 달걀 볶음', time: '15분', reqIngredients: ['tomato', 'egg', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=토마토달걀볶음', desc: '부드럽고 상큼한 단짠단짠 반찬' },
    { id: 6, title: '치즈 닭갈비', time: '45분', reqIngredients: ['chicken', 'cheese', 'onion', 'garlic'], link: 'https://www.10000recipe.com/recipe/list.html?q=치즈닭갈비', desc: '매콤달콤 소스와 고소한 치즈의 조화' },
    { id: 7, title: '간장계란밥', time: '5분', reqIngredients: ['rice', 'egg', 'soysauce', 'sesame_oil'], link: 'https://www.10000recipe.com/recipe/list.html?q=간장계란밥', desc: '자취생 최고의 필살기' },
    { id: 8, title: '김치볶음밥', time: '15분', reqIngredients: ['kimchi', 'rice', 'spam', 'egg'], link: 'https://www.10000recipe.com/recipe/list.html?q=김치볶음밥', desc: '언제 먹어도 맛있는 소울푸드' },
    { id: 9, title: '참치마요덮밥', time: '10분', reqIngredients: ['tuna_can', 'mayonnaise', 'rice', 'onion'], link: 'https://www.10000recipe.com/recipe/list.html?q=참치마요덮밥', desc: '고소하고 짭조름한 마요덮밥' },
    { id: 10, title: '스팸파기름볶음밥', time: '15분', reqIngredients: ['spam', 'greenonion', 'egg', 'rice'], link: 'https://www.10000recipe.com/recipe/list.html?q=스팸볶음밥', desc: '파향 가득한 스팸 볶음밥' },
    { id: 11, title: '간장비빔국수', time: '10분', reqIngredients: ['noodle', 'soysauce', 'sesame_oil', 'sugar'], link: 'https://www.10000recipe.com/recipe/list.html?q=간장비빔국수', desc: '입맛 없을 때 딱!' },
    { id: 12, title: '고추장비빔국수', time: '10분', reqIngredients: ['noodle', 'gochujang', 'vinegar', 'sugar', 'kimchi'], link: 'https://www.10000recipe.com/recipe/list.html?q=고추장비빔국수', desc: '새콤달콤 매콤 비빔국수' },
    { id: 13, title: '파송송 계란라면', time: '5분', reqIngredients: ['ramen', 'egg', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=라면', desc: '부드러운 국물맛의 라면' },
    { id: 14, title: '식빵 피자', time: '15분', reqIngredients: ['bread', 'ketchup', 'onion', 'sausage', 'cheese'], link: 'https://www.10000recipe.com/recipe/list.html?q=식빵피자', desc: '전자레인지/에어프라이어 뚝딱' },
    { id: 15, title: '알리오 올리오', time: '20분', reqIngredients: ['spaghetti', 'garlic', 'olive_oil', 'pepper'], link: 'https://www.10000recipe.com/recipe/list.html?q=알리오올리오', desc: '마늘 풍미 가득한 오일 파스타' },
    { id: 16, title: '야매 토마토파스타', time: '15분', reqIngredients: ['spaghetti', 'ketchup', 'onion', 'sausage'], link: 'https://www.10000recipe.com/recipe/list.html?q=케첩파스타', desc: '케첩으로 만드는 나폴리탄' },
    { id: 17, title: '우유 베이컨 파스타', time: '20분', reqIngredients: ['pasta', 'bacon', 'milk', 'garlic', 'cheese'], link: 'https://www.10000recipe.com/recipe/list.html?q=우유파스타', desc: '생크림 없이 우유로 만든 크림파스타' },
    { id: 18, title: '초간단 떡국', time: '20분', reqIngredients: ['riceteok', 'egg', 'beef', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=간단떡국', desc: '만두를 넣으면 떡만둣국!' },
    { id: 19, title: '양배추 돼지고기 덮밥', time: '20분', reqIngredients: ['cabbage', 'pork', 'soysauce', 'sugar', 'rice'], link: 'https://www.10000recipe.com/recipe/list.html?q=양배추덮밥', desc: '달달 짭짤 일본식 덮밥 느낌' },
    { id: 20, title: '바삭바삭 부추전', time: '15분', reqIngredients: ['leek', 'flour', 'cooking_oil'], link: 'https://www.10000recipe.com/recipe/list.html?q=부추전', desc: '비 오는 날 생각나는 바삭한 부추전' },
    { id: 21, title: '양념간장 콩나물밥', time: '30분', reqIngredients: ['bean_sprout', 'rice', 'soysauce', 'sesame_oil'], link: 'https://www.10000recipe.com/recipe/list.html?q=콩나물밥', desc: '전기밥솥으로 간단하게' },
    { id: 22, title: '참치 김치전', time: '15분', reqIngredients: ['kimchi', 'tuna_can', 'flour', 'cooking_oil'], link: 'https://www.10000recipe.com/recipe/list.html?q=김치전', desc: '참치가 들어가 고소함 폭발' },
    { id: 23, title: '스팸 김치찌개', time: '25분', reqIngredients: ['kimchi', 'spam', 'tofu', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=스팸김치찌개', desc: '스팸 기름으로 국물이 진해져요' },
    { id: 24, title: '짭짤 어묵볶음', time: '10분', reqIngredients: ['fishcake', 'onion', 'soysauce', 'sugar'], link: 'https://www.10000recipe.com/recipe/list.html?q=어묵볶음', desc: '밑반찬의 최고봉' },
    { id: 25, title: '부들부들 계란찜', time: '10분', reqIngredients: ['egg', 'salt', 'water', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=계란찜', desc: '전자레인지 초간단 찜' },
    { id: 26, title: '매콤 두부조림', time: '20분', reqIngredients: ['tofu', 'soysauce', 'gochujang', 'onion', 'greenonion'], link: 'https://www.10000recipe.com/recipe/list.html?q=두부조림', desc: '밥도둑이 따로 없는 매콤 조림' },
    { id: 27, title: '카레라이스', time: '30분', reqIngredients: ['curry_powder', 'potato', 'carrot', 'pork', 'rice', 'onion'], link: 'https://www.10000recipe.com/recipe/list.html?q=카레', desc: '왕창 만들어두고 먹는 자취꿀템' },
    { id: 28, title: '쏘야 볶음', time: '15분', reqIngredients: ['sausage', 'onion', 'ketchup', 'sugar'], link: 'https://www.10000recipe.com/recipe/list.html?q=소시지야채볶음', desc: '새콤달콤 소시지 야채 볶음' },
    { id: 29, title: '마약 콘치즈', time: '10분', reqIngredients: ['corn_can', 'cheese', 'mayonnaise', 'sugar'], link: 'https://www.10000recipe.com/recipe/list.html?q=콘치즈', desc: '안주로 최고인 단짠 콘치즈' },
    { id: 30, title: '프렌치 토스트', time: '15분', reqIngredients: ['bread', 'egg', 'milk', 'sugar', 'butter'], link: 'https://www.10000recipe.com/recipe/list.html?q=프렌치토스트', desc: '우유와 계란으로 촉촉하게' },
    { id: 31, title: '분식집 라볶이', time: '20분', reqIngredients: ['ramen', 'riceteok', 'gochujang', 'sugar', 'fishcake'], link: 'https://www.10000recipe.com/recipe/list.html?q=라볶이', desc: '떡볶이 소스에 끓인 꼬들 라면' },
    { id: 32, title: '고구마 맛탕', time: '25분', reqIngredients: ['sweetpotato', 'sugar', 'cooking_oil'], link: 'https://www.10000recipe.com/recipe/list.html?q=맛탕', desc: '달콤바삭 맛탕 간식' },
    { id: 33, title: '촉촉 물만두국', time: '15분', reqIngredients: ['dumpling', 'egg', 'greenonion', 'soysauce'], link: 'https://www.10000recipe.com/recipe/list.html?q=만두국', desc: '시판 냉동만두로 초간단 국물요리' },
    { id: 34, title: '버터간장계란밥', time: '5분', reqIngredients: ['rice', 'butter', 'egg', 'soysauce'], link: 'https://www.10000recipe.com/recipe/list.html?q=버터간장밥', desc: '버터의 풍미가 예술!' },
    { id: 35, title: '마늘 볶음밥', time: '15분', reqIngredients: ['rice', 'garlic', 'butter', 'salt'], link: 'https://www.10000recipe.com/recipe/list.html?q=마늘볶음밥', desc: '마늘 향이 일품인 초간단 볶음밥' }
];

// --- 상태 관리 ---
let inventory = new Set(); // 보관된 재료 id 모음

// --- DOM 요소 ---
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const fridgeDoor = document.getElementById('fridgeDoor');
const fridge = document.getElementById('fridge');
const dropzones = document.querySelectorAll('.dropzone');
const recipeList = document.getElementById('recipeList');

// --- 이벤트 리스너 ---

// 냉장고 문 열고 닫기
fridgeDoor.addEventListener('click', () => {
    fridge.classList.toggle('open');
});

// 검색 기능
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    searchResults.innerHTML = ''; // 초기화

    if (query.length === 0) return;

    // 이름에 쿼리가 포함된 재료 필터링 (이미 보관중이지 않은 것만)
    const matches = ingredientsDB.filter(ing => 
        ing.name.includes(query) && !inventory.has(ing.id)
    );

    matches.forEach(ing => {
        const item = createIngredientElement(ing);
        searchResults.appendChild(item);
    });
});

// 요소 생성 헬퍼 함수
function createIngredientElement(ingredient) {
    const div = document.createElement('div');
    div.classList.add('ingredient-item');
    div.setAttribute('draggable', 'true');
    div.dataset.id = ingredient.id;

    div.innerHTML = `
        <span class="ingredient-emoji">${ingredient.emoji}</span>
        <span class="ingredient-name">${ingredient.name}</span>
    `;

    // 드래그 시작 이벤트
    div.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', ingredient.id);
        setTimeout(() => div.style.opacity = '0.5', 0);
        // 드래그 시 냉장고 문을 자동으로 연다 (게임적 요소)
        if (!fridge.classList.contains('open')) {
            fridge.classList.add('open');
        }
    });

    // 드래그 종료 이벤트
    div.addEventListener('dragend', (e) => {
        div.style.opacity = '1';
    });

    return div;
}

// --- 드래그 앤 드롭 구현 ---
dropzones.forEach(zone => {
    // 드래그 요소가 존 위에 있을 때
    zone.addEventListener('dragover', (e) => {
        e.preventDefault(); // 필수: 드롭을 허용하기 위해
        zone.classList.add('drag-over');
    });

    // 드래그 요소가 존을 벗어날 때
    zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
    });

    // 요소 드롭 시
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        
        const id = e.dataTransfer.getData('text/plain');
        if (!id) return;

        // 이미 보관된 재료 목록에 추가
        inventory.add(id);
        saveInventory();

        // 검색 결과 창에서 해당 요소 찾아서 삭제 (또는 안보이게)
        const draggedElement = document.querySelector(`.ingredient-item[data-id="${id}"]`);
        if (draggedElement) {
            draggedElement.remove();
        }

        // 보관함에 새 요소 생성하여 추가
        const ingredientInfo = ingredientsDB.find(ing => ing.id === id);
        const storedItem = createStoredElement(ingredientInfo, zone);
        zone.appendChild(storedItem);

        // empty-hint 감추기 로직
        const hint = zone.querySelector('.empty-hint');
        if (hint) {
            hint.style.display = 'none';
        }

        // 레시피 업데이트
        updateRecipes();
    });
});

// 보관함에 보관된 아이템(클릭 시 제거 가능)
function createStoredElement(ingredient, parentZone) {
    const div = document.createElement('div');
    div.classList.add('ingredient-item');
    div.dataset.id = ingredient.id;
    
    // 시각적 효과를 위해 툴팁처럼 이름 표시
    div.title = ingredient.name + " (클릭해서 제거)";
    div.innerHTML = `
        <span class="ingredient-emoji">${ingredient.emoji}</span>
        <span class="ingredient-name">${ingredient.name}</span>
    `;

    // 클릭 시 보관함에서 제거
    div.addEventListener('click', () => {
        div.style.transform = 'scale(0) translateY(20px)';
        div.style.opacity = '0';
        setTimeout(() => {
            div.remove();
            inventory.delete(ingredient.id);
            saveInventory();
            updateRecipes();

            // 만약 비었다면 empty-hint 복구 (Pantry의 경우)
            if (parentZone.id === 'pantryZone' && parentZone.querySelectorAll('.ingredient-item').length === 0) {
                const hint = parentZone.querySelector('.empty-hint');
                if (hint) hint.style.display = 'block';
            }
        }, 300);
    });

    return div;
}

// --- 레시피 추천 로직 ---
function updateRecipes() {
    recipeList.innerHTML = '';

    if (inventory.size === 0) {
        recipeList.innerHTML = '<p class="empty-msg">보관된 재료가 없습니다. 재료를 추가해보세요!</p>';
        return;
    }

    // 각 레시피별로 보유 재료 수(일치율) 계산
    const scoredRecipes = recipesDB.map(recipe => {
        const matches = recipe.reqIngredients.filter(reqId => inventory.has(reqId));
        return {
            ...recipe,
            matchCount: matches.length,
            matchPercentage: Math.round((matches.length / recipe.reqIngredients.length) * 100)
        };
    }).filter(recipe => recipe.matchCount > 0); // 하나라도 일치하는게 있는 것만

    // 일치율 높은 순, 시간 짧은 순 정렬
    scoredRecipes.sort((a, b) => b.matchCount - a.matchCount);

    if (scoredRecipes.length === 0) {
        recipeList.innerHTML = '<p class="empty-msg">현재 재료와 일치하는 레시피가 없습니다. 더 많은 재료를 넣어보세요!</p>';
        return;
    }

    // 렌더링
    scoredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        // 매칭된 재료 이름들 추출
        const hasIngNames = recipe.reqIngredients
            .filter(id => inventory.has(id))
            .map(id => ingredientsDB.find(i => i.id === id).name)
            .join(', ');
            
        const missingIngNames = recipe.reqIngredients
            .filter(id => !inventory.has(id))
            .map(id => ingredientsDB.find(i => i.id === id).name)
            .join(', ');

        let missingStr = missingIngNames.length > 0 ? `<br><span style="color:#e74c3c; font-size:0.8rem">부족: ${missingIngNames}</span>` : `<br><span style="color:#2ecc71; font-size:0.8rem">모든 재료가 준비되었습니다!</span>`;

        card.innerHTML = `
            <div class="match-badge">보유 재료 ${recipe.matchPercentage}% 일치</div>
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time}</span>
                <span>${recipe.desc}</span>
            </div>
            <div class="recipe-ingredients">
                <strong>재료:</strong> ${hasIngNames} ${missingStr}
            </div>
            <a href="${recipe.link}" target="_blank" class="recipe-link">조리법 자세히 보기 👉</a>
        `;
        recipeList.appendChild(card);
    });
}

// --- 데이터 영구 저장 (Local Storage) ---
function saveInventory() {
    // DOM을 직접 읽어서 현재 아이템이 냉장고에 있는지 상온에 있는지 위치를 정확히 파악하여 저장합니다.
    const fridgeZone = document.getElementById('fridgeZone');
    const pantryZone = document.getElementById('pantryZone');
    
    const fridgeItems = Array.from(fridgeZone.querySelectorAll('.ingredient-item')).map(el => el.dataset.id);
    const pantryItems = Array.from(pantryZone.querySelectorAll('.ingredient-item')).map(el => el.dataset.id);

    localStorage.setItem('fridgeLocations', JSON.stringify({ fridge: fridgeItems, pantry: pantryItems }));
    // 혹시 모를 기존 로직 연동을 위해 예전 id 목록 형태로도 유지
    localStorage.setItem('fridgeInventory', JSON.stringify(Array.from(inventory)));
}

function loadInventory() {
    const savedLocsStr = localStorage.getItem('fridgeLocations');
    
    // 신버전 (위치 정보 포함) 로직
    if (savedLocsStr) {
        const savedLocs = JSON.parse(savedLocsStr);
        const allItems = [...(savedLocs.fridge || []), ...(savedLocs.pantry || [])];
        
        allItems.forEach(id => {
            if(inventory.has(id)) return;
            const ingredientInfo = ingredientsDB.find(ing => ing.id === id);
            if (ingredientInfo) {
                inventory.add(id);
                // 저장된 위치 정보를 바탕으로 구역 지정
                const isFridge = savedLocs.fridge.includes(id);
                const zone = document.getElementById(isFridge ? 'fridgeZone' : 'pantryZone');
                
                if (zone) {
                    const storedItem = createStoredElement(ingredientInfo, zone);
                    zone.appendChild(storedItem);

                    const hint = zone.querySelector('.empty-hint');
                    if (hint) hint.style.display = 'none';
                }
            }
        });
        updateRecipes();
        return;
    }

    // 구버전 (위치 정보 없음 - DB의 type 기준) 호환성 유지 로직
    const saved = localStorage.getItem('fridgeInventory');
    if (saved) {
        const savedIds = JSON.parse(saved);
        savedIds.forEach(id => {
            const ingredientInfo = ingredientsDB.find(ing => ing.id === id);
            if (ingredientInfo && !inventory.has(id)) {
                inventory.add(id);

                // 구버전은 ingredientInfo.type 속성에 강제로 의존했음
                const zoneId = ingredientInfo.type === 'fridge' ? 'fridgeZone' : 'pantryZone';
                const zone = document.getElementById(zoneId);
                if (zone) {
                    const storedItem = createStoredElement(ingredientInfo, zone);
                    zone.appendChild(storedItem);

                    const hint = zone.querySelector('.empty-hint');
                    if (hint) hint.style.display = 'none';
                }
            }
        });
        saveInventory(); // 신버전으로 마이그레이션 저장
        updateRecipes();
    }
}

// 로드 시 초기화 실행
loadInventory();
