
const quizData = [
    {
        question: "你最希望实现的愿望是？",
        options: {
            A: "一夜暴富（💰金币从天而降）",
            B: "健康平安（🌿谢谢你，我会照顾好自己）",
            C: "家庭和睦（🏠我永远记得你给的温暖）",
            D: "万事顺意（🌈愿好运常伴你身边）"
        }
    },
    {
        question: "你打开这个网页的第一反应？",
        options: {
            A: "哈哈，这是我宝贝做的吗？（当然是我亲手写的！）",
            B: "这么有心？眼睛有点酸…（不许哭！我还会一直做）",
            C: "这是个网站？怎么还有互动？（嘿嘿，我是不是有点厉害）",
            D: "哇，还有音乐！（对呀，这首歌我挑了好久～）"
        }
    },
    {
        question: "你觉得我是什么样的小孩？",
        options: {
            A: "贴心（你们的爱我都记在心上）",
            B: "有主见（放心，我会好好过自己的人生）",
            C: "偶尔有点叛逆（是因为我长大了哦）",
            D: "脾气臭但嘴甜（我可是你们的小狐狸）"
        }
    },
    {
        question: "你希望我接下来最该做的是什么？",
        options: {
            A: "好好读书！（我知道啦！已经在学了）",
            B: "多回家看看（答应你，不让你们想我太久）",
            C: "谈个靠谱恋爱（不急，遇到对的人才有趣）",
            D: "吃饱睡好不熬夜（你怎么知道我昨天又三点睡…）"
        }
    }
];

const container = document.getElementById("quiz-container");

quizData.forEach((quiz, index) => {
    const section = document.createElement("div");
    section.innerHTML = `<h3>${quiz.question}</h3>`;
    for (const [key, value] of Object.entries(quiz.options)) {
        const btn = document.createElement("button");
        btn.textContent = `${key}. ${value.split('（')[0]}`;
        btn.onclick = () => alert(value.match(/（(.*?)）/)[1]);
        section.appendChild(btn);
    }
    container.appendChild(section);
});
