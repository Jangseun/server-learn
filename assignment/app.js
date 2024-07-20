const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const kakao = [
    {
        id: 1,
        concept: "갈기가 없는 것이 콤플렉스인 수사자",
        name: "라이언",
    },

    {
        id: 2,
        concept: "카카오프렌즈 최고 잔망꾸러기 복숭아",
        name: "어피치",
    },

    {
        id: 3,
        concept: "나이를 알수없는 신비로운 표정의 꼬마 악어",
        name: "콘",
    },

    {
        id: 4,
        concept: "토끼옷을 입고 있지만 정체는 단무지",
        name: "무지"
    },
];

app.listen(PORT, () => {
    console.log(`${PORT}에서 서버가 켜졌습니다.`);
});

/*====================================================*/

/**/
app.get("/kakao", (req, res) => {
    res.json(kakao);
});


app.get("/kakao/name", (req, res) => {
    let resData = [];
    for(let i = 0; i < kakao.length; i++) {
        if(kakao[i].name == "무지") {
            resData.push(kakao[i]);
        }
    }
    res.json(resData);
});


app.get("/kakao/:id", (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = kakao.find((i) => i.id === itemId);
    if (item) {
        res.json(item);
    }
    else {
        res.status(404).json({ message: "데이터가 존재하지 않습니다."});
    }
});


app.post("/kakao", (req, res) => {
    const newItem = req.body;
    newItem.id = kakao.length + 1;
    kakao.push(newItem);
    res.status(200).json(newItem);
});


app.delete("/kakao/:id", (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = kakao.findIndex((i) => i.id === itemId);
    if (itemIndex !== -1) {
        kakao.splice(itemId, 1);
        res.status(204).send("데이터 삭제됨");
    }
    else {
        res.status(404).json({ message: "삭제할 데이터가 존재하지 않습니다."});
    }
});


app.put("/kakao/:id", (req, res) => {
    const items = [];
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = kakao.findIndex((i) => i.id === itemId);
    if (itemIndex !== -1) {
        const updatedItem = {...items[itemIndex+1], ...req.body }
        kakao[itemIndex+1] = updatedItem;
        res.json(updatedItem);
    }
    else {
        res.status(404).json({ message: "업데이트 할 데이터가 존재하지 않습니다."});
    }
});
/*
*/