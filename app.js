// 遊戲數據
const gameData = {
  themes: [
    {
      id: "adventure",
      name: "奇幻冒險",
      description: "踏上魔法森林的探險之旅",
      icon: "🗡️",
      color: "#FF6B6B"
    },
    {
      id: "friendship",
      name: "友情故事", 
      description: "和朋友一起解決問題",
      icon: "🤝",
      color: "#4ECDC4"
    },
    {
      id: "growth",
      name: "成長學習",
      description: "學習新技能和知識",
      icon: "🌱",
      color: "#45B7D1"
    },
    {
      id: "mystery",
      name: "神秘探索",
      description: "解開謎題找到寶藏",
      icon: "🔍",
      color: "#FFA726"
    }
  ],
  sampleObjects: [
    {
      name: "玩具熊",
      character: "勇敢的熊戰士",
      ability: "力量增強",
      image: "🧸"
    },
    {
      name: "蘋果",
      character: "治療藥水",
      ability: "恢復生命值",
      image: "🍎"
    },
    {
      name: "書本",
      character: "智慧導師",
      ability: "提供線索",
      image: "📚"
    },
    {
      name: "鑰匙",
      character: "神秘開鎖師",
      ability: "打開隱藏通道",
      image: "🗝️"
    },
    {
      name: "花朵",
      character: "治癒精靈",
      ability: "淨化魔法",
      image: "🌸"
    },
    {
      name: "星星",
      character: "指引之光",
      ability: "照亮前路",
      image: "⭐"
    }
  ],
  storyTemplates: {
    adventure: {
      title: "魔法森林的冒險",
      nodes: {
        start: {
          text: "你和你的夥伴{character1}來到了神秘的魔法森林。森林深處傳來奇怪的聲音，你決定...",
          choices: [
            { text: "勇敢地朝聲音方向前進", nextNode: "forest_deep" },
            { text: "先在原地觀察情況", nextNode: "forest_observe" }
          ]
        },
        forest_deep: {
          text: "你們深入森林，發現了一個被魔法保護的寶箱。{character2}散發出神秘的光芒，似乎想要幫助你。",
          choices: [
            { text: "讓{character2}嘗試破解魔法", nextNode: "magic_success", requiresDice: true },
            { text: "尋找其他方法", nextNode: "alternative_path" }
          ]
        },
        forest_observe: {
          text: "通過仔細觀察，你發現聲音來自一隻受傷的小動物。{character3}的能力正好可以幫助它。",
          choices: [
            { text: "用{character3}幫助小動物", nextNode: "animal_help" },
            { text: "繼續探索森林", nextNode: "forest_deep" }
          ]
        },
        magic_success: {
          text: "太棒了！{character2}成功破解了魔法，寶箱打開了！裡面有一顆會發光的寶石，它將引導你們回到安全的地方。",
          isEnd: true,
          endMessage: "你們成功完成了魔法森林的冒險，獲得了珍貴的魔法寶石！"
        },
        alternative_path: {
          text: "你們決定繞過寶箱，繼續探索。意外發現了一條隱藏的小徑，通向森林的另一端。",
          choices: [
            { text: "沿著小徑前進", nextNode: "hidden_path" }
          ]
        },
        animal_help: {
          text: "小動物康復後，為了感謝你們，它帶領你們找到了森林的出口，還送給你們一束美麗的花朵作為紀念。",
          isEnd: true,
          endMessage: "你們不僅完成了冒險，還幫助了需要幫助的小動物！真是一個溫暖的故事。"
        },
        hidden_path: {
          text: "隱藏小徑帶你們來到了一個美麗的瀑布，瀑布後面隱藏著森林守護者的居所。守護者感謝你們的善良，贈送了魔法護身符。",
          isEnd: true,
          endMessage: "你們獲得了森林守護者的祝福，這是最珍貴的獎勵！"
        }
      }
    },
    friendship: {
      title: "朋友的困難",
      nodes: {
        start: {
          text: "你的好朋友遇到了困難，他需要找到丟失的{item}。你和{character1}決定...",
          choices: [
            { text: "分頭尋找，提高效率", nextNode: "split_search" },
            { text: "一起行動，互相照應", nextNode: "together_search" }
          ]
        },
        split_search: {
          text: "你們分頭行動，{character1}很快找到了線索。但是你在尋找過程中遇到了困難。",
          choices: [
            { text: "向{character1}求助", nextNode: "ask_help" },
            { text: "用{character2}的能力解決", nextNode: "solve_alone", requiresDice: true }
          ]
        },
        together_search: {
          text: "你們一起尋找，雖然速度慢一些，但是{character2}和{character3}的組合發揮了意想不到的效果。",
          choices: [
            { text: "繼續合作尋找", nextNode: "teamwork_success" }
          ]
        },
        ask_help: {
          text: "朋友之間互相幫助是最重要的！{character1}立刻趕來幫助你，你們很快就找到了丟失的物品。",
          isEnd: true,
          endMessage: "通過合作，你們不僅找到了丟失的物品，友情也變得更加深厚！"
        },
        solve_alone: {
          text: "你決定靠自己解決問題，這讓你變得更加勇敢和獨立。",
          choices: [
            { text: "繼續尋找", nextNode: "independent_success" }
          ]
        },
        teamwork_success: {
          text: "團隊合作的力量真是太神奇了！你們不僅找到了丟失的物品，還發現了更多有趣的東西。",
          isEnd: true,
          endMessage: "團結就是力量！你們用友情和合作解決了所有問題。"
        },
        independent_success: {
          text: "通過自己的努力，你成功找到了丟失的物品。這次經歷讓你學會了獨立思考和解決問題。",
          isEnd: true,
          endMessage: "你學會了獨立解決問題，同時也明白了朋友支持的重要性！"
        }
      }
    },
    growth: {
      title: "學習新技能",
      nodes: {
        start: {
          text: "今天你要學習一項新技能！{character1}將成為你的老師，{character2}會在旁邊協助。你想學習什麼呢？",
          choices: [
            { text: "學習魔法技能", nextNode: "magic_skill" },
            { text: "學習實用技能", nextNode: "practical_skill" }
          ]
        },
        magic_skill: {
          text: "魔法學習很有趣但也很困難。{character1}耐心地教導你，但是魔法需要專注和練習。",
          choices: [
            { text: "努力練習基礎魔法", nextNode: "magic_practice", requiresDice: true },
            { text: "請{character2}幫助理解", nextNode: "magic_help" }
          ]
        },
        practical_skill: {
          text: "實用技能學習讓你感到很有成就感。{character1}示範了正確的方法，你很快就掌握了要領。",
          choices: [
            { text: "繼續深入學習", nextNode: "skill_master" }
          ]
        },
        magic_practice: {
          text: "通過不斷的練習，你的魔法技能有了很大進步！",
          choices: [
            { text: "展示學習成果", nextNode: "magic_success" }
          ]
        },
        magic_help: {
          text: "{character2}用獨特的方式幫助你理解魔法的原理，讓複雜的魔法變得簡單易懂。",
          choices: [
            { text: "結合理論和實踐", nextNode: "magic_success" }
          ]
        },
        skill_master: {
          text: "你已經熟練掌握了這項技能！{character3}為你感到驕傲，並鼓勵你繼續學習更多技能。",
          isEnd: true,
          endMessage: "恭喜你成功學會了新技能！學習讓你變得更加優秀。"
        },
        magic_success: {
          text: "你的魔法技能讓所有人都印象深刻！這次學習之旅讓你收穫滿滿。",
          isEnd: true,
          endMessage: "通過努力學習，你掌握了神奇的魔法技能！繼續保持學習的熱情吧。"
        }
      }
    },
    mystery: {
      title: "神秘寶藏探索",
      nodes: {
        start: {
          text: "你發現了一張古老的寶藏地圖！{character1}對地圖很感興趣，你們決定一起尋找寶藏。第一個線索指向...",
          choices: [
            { text: "古老的圖書館", nextNode: "library" },
            { text: "神秘的洞穴", nextNode: "cave" }
          ]
        },
        library: {
          text: "在圖書館裡，你們找到了關於寶藏的古老傳說。{character2}幫助你們解讀了古文字的含義。",
          choices: [
            { text: "按照傳說尋找下一個線索", nextNode: "follow_legend" },
            { text: "尋找更多相關資料", nextNode: "more_research" }
          ]
        },
        cave: {
          text: "洞穴很黑很深，但是{character3}發出的光芒照亮了前路。你們發現了牆上的神秘符號。",
          choices: [
            { text: "嘗試解讀符號", nextNode: "decode_symbols", requiresDice: true },
            { text: "繼續深入洞穴", nextNode: "deeper_cave" }
          ]
        },
        follow_legend: {
          text: "傳說帶領你們來到了一個秘密花園，花園中央有一個古老的雕像，雕像手中握著發光的寶石。",
          isEnd: true,
          endMessage: "你們成功找到了傳說中的寶藏！這是一次完美的探險。"
        },
        more_research: {
          text: "通過深入研究，你們發現了寶藏的真正位置。原來寶藏就藏在圖書館的秘密房間裡！",
          isEnd: true,
          endMessage: "知識就是最大的寶藏！你們用智慧找到了答案。"
        },
        decode_symbols: {
          text: "你們成功解讀了符號，它們指向洞穴深處的一個隱藏房間。",
          choices: [
            { text: "前往隱藏房間", nextNode: "treasure_room" }
          ]
        },
        deeper_cave: {
          text: "洞穴深處有一個地下湖泊，湖泊中央的小島上放著一個寶箱。",
          choices: [
            { text: "想辦法到達小島", nextNode: "treasure_room" }
          ]
        },
        treasure_room: {
          text: "你們找到了寶藏室！裡面不僅有金銀珠寶，還有許多古老的魔法道具和知識卷軸。",
          isEnd: true,
          endMessage: "恭喜你們找到了神秘寶藏！這次冒險讓你們收穫了財富和智慧。"
        }
      }
    }
  }
};

// 遊戲狀態
let gameState = {
  currentPage: 'welcome-page',
  capturedItems: [],
  selectedTheme: null,
  currentStory: null,
  currentNode: 'start',
  playerItems: []
};

// 頁面切換函數
function showPage(pageId) {
  // 隱藏所有頁面
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // 顯示目標頁面
  document.getElementById(pageId).classList.add('active');
  gameState.currentPage = pageId;
}

// 開始遊戲
function startGame() {
  showPage('camera-page');
}

// 拍攝物品
function captureItem() {
  if (gameState.capturedItems.length >= 3) return;
  
  // 從樣本物品中隨機選擇一個
  const availableItems = gameData.sampleObjects.filter(
    item => !gameState.capturedItems.find(captured => captured.name === item.name)
  );
  
  if (availableItems.length === 0) return;
  
  const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
  gameState.capturedItems.push(randomItem);
  gameState.playerItems.push(randomItem);
  
  // 更新計數器
  document.getElementById('captured-count').textContent = gameState.capturedItems.length;
  
  // 添加拍攝動畫效果
  const viewfinder = document.querySelector('.viewfinder-frame');
  viewfinder.style.background = '#fff';
  setTimeout(() => {
    viewfinder.style.background = 'rgba(255, 255, 255, 0.8)';
  }, 200);
  
  // 如果拍攝完成，顯示物品識別頁面
  if (gameState.capturedItems.length === 3) {
    setTimeout(() => {
      showIdentification();
    }, 1000);
  }
}

// 顯示物品識別結果
function showIdentification() {
  showPage('identification-page');
  
  const container = document.getElementById('identified-items');
  container.innerHTML = '';
  
  gameState.capturedItems.forEach((item, index) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    itemCard.style.animationDelay = `${index * 0.2}s`;
    
    itemCard.innerHTML = `
      <div class="item-emoji">${item.image}</div>
      <div class="item-name">${item.name}</div>
      <div class="item-character">${item.character}</div>
      <div class="item-ability">${item.ability}</div>
    `;
    
    container.appendChild(itemCard);
  });
}

// 顯示主題選擇
function showThemes() {
  showPage('theme-page');
  
  const container = document.getElementById('theme-grid');
  container.innerHTML = '';
  
  gameData.themes.forEach((theme, index) => {
    const themeCard = document.createElement('div');
    themeCard.className = 'theme-card';
    themeCard.style.animationDelay = `${index * 0.1}s`;
    themeCard.onclick = () => selectTheme(theme);
    
    themeCard.innerHTML = `
      <div class="theme-icon">${theme.icon}</div>
      <div class="theme-name">${theme.name}</div>
      <div class="theme-description">${theme.description}</div>
    `;
    
    container.appendChild(themeCard);
  });
}

// 選擇主題
function selectTheme(theme) {
  gameState.selectedTheme = theme;
  
  // 顯示故事生成頁面
  showPage('story-generation-page');
  
  // 模擬故事生成過程
  setTimeout(() => {
    generateStory();
  }, 3000);
}

// 生成故事
function generateStory() {
  gameState.currentStory = gameData.storyTemplates[gameState.selectedTheme.id];
  gameState.currentNode = 'start';
  
  showPage('game-page');
  displayStoryNode();
}

// 顯示故事節點
function displayStoryNode() {
  const story = gameState.currentStory;
  const node = story.nodes[gameState.currentNode];
  
  // 設置故事標題
  document.getElementById('story-title').textContent = story.title;
  
  // 顯示角色
  displayCharacters();
  
  // 處理故事文字中的變量替換
  let storyText = node.text;
  storyText = storyText.replace('{character1}', gameState.playerItems[0]?.character || '神秘夥伴');
  storyText = storyText.replace('{character2}', gameState.playerItems[1]?.character || '智慧助手');
  storyText = storyText.replace('{character3}', gameState.playerItems[2]?.character || '忠實朋友');
  storyText = storyText.replace('{item}', gameState.playerItems[0]?.name || '神秘物品');
  
  document.getElementById('story-text').textContent = storyText;
  
  // 顯示選擇按鈕
  const choicesContainer = document.getElementById('game-choices');
  choicesContainer.innerHTML = '';
  
  if (node.isEnd) {
    // 遊戲結束
    setTimeout(() => {
      showGameEnd(node.endMessage);
    }, 2000);
    return;
  }
  
  node.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.textContent = choice.text.replace('{character1}', gameState.playerItems[0]?.character || '神秘夥伴')
                                  .replace('{character2}', gameState.playerItems[1]?.character || '智慧助手')
                                  .replace('{character3}', gameState.playerItems[2]?.character || '忠實朋友');
    button.style.animationDelay = `${index * 0.1}s`;
    
    button.onclick = () => {
      if (choice.requiresDice) {
        gameState.nextNode = choice.nextNode;
        showDicePage();
      } else {
        gameState.currentNode = choice.nextNode;
        displayStoryNode();
      }
    };
    
    choicesContainer.appendChild(button);
  });
}

// 顯示角色
function displayCharacters() {
  const container = document.getElementById('character-display');
  container.innerHTML = '';
  
  gameState.playerItems.forEach(item => {
    const characterDiv = document.createElement('div');
    characterDiv.className = 'character-item';
    
    characterDiv.innerHTML = `
      <div class="character-emoji">${item.image}</div>
      <div class="character-name">${item.character}</div>
    `;
    
    container.appendChild(characterDiv);
  });
}

// 顯示骰子頁面
function showDicePage() {
  showPage('dice-page');
  document.getElementById('dice-result').textContent = '';
  document.getElementById('roll-dice-btn').style.display = 'block';
}

// 投擲骰子
function rollDice() {
  const dice = document.getElementById('dice');
  const resultDiv = document.getElementById('dice-result');
  const rollBtn = document.getElementById('roll-dice-btn');
  
  // 隱藏按鈕
  rollBtn.style.display = 'none';
  
  // 添加旋轉動畫
  dice.classList.add('rolling');
  
  // 模擬骰子滾動
  let rollCount = 0;
  const rollInterval = setInterval(() => {
    const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const randomFace = faces[Math.floor(Math.random() * faces.length)];
    document.querySelector('.dice-face').textContent = randomFace;
    
    rollCount++;
    if (rollCount > 10) {
      clearInterval(rollInterval);
      
      // 最終結果
      const finalResult = Math.floor(Math.random() * 6) + 1;
      const finalFace = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][finalResult - 1];
      document.querySelector('.dice-face').textContent = finalFace;
      
      dice.classList.remove('rolling');
      
      // 顯示結果
      setTimeout(() => {
        if (finalResult >= 4) {
          resultDiv.textContent = '🎉 成功！你的行動產生了正面效果！';
        } else {
          resultDiv.textContent = '😅 雖然沒有完全成功，但你學到了寶貴經驗！';
        }
        
        // 繼續故事
        setTimeout(() => {
          gameState.currentNode = gameState.nextNode;
          showPage('game-page');
          displayStoryNode();
        }, 2000);
      }, 1000);
    }
  }, 100);
}

// 顯示遊戲結束頁面
function showGameEnd(endMessage) {
  showPage('game-end-page');
  document.getElementById('end-message').textContent = endMessage;
}

// 重新開始遊戲
function restartGame() {
  gameState = {
    currentPage: 'welcome-page',
    capturedItems: [],
    selectedTheme: null,
    currentStory: null,
    currentNode: 'start',
    playerItems: []
  };
  
  showPage('welcome-page');
}

// 初始化遊戲
document.addEventListener('DOMContentLoaded', function() {
  // 確保歡迎頁面是第一個顯示的頁面
  showPage('welcome-page');
  
  // 添加鍵盤支持
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      restartGame();
    }
  });
});