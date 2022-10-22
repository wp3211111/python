# 导入模块
import pygame
import random
import sys
#定义颜色
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
DARKGREEN = (0, 185, 0)
YELLOW=(255,255,0)
#定义方向
UP = 1
DOWN = 2
LEFT = 3
RIGHT = 4
#定义窗口的大小
windowsWidth = 800
windowsHeight = 600
#定义地图大小
cellSize = 20 #定义基础单位大小
mapWidth = int(windowsWidth / cellSize)
mapHeight = int(windowsHeight / cellSize)
HEAD = 0 #贪吃蛇头部下标
snakeSpeed = 7 #贪吃蛇的速度
#主函数
def main():
    pygame.init() # 模块初始化
    screen = pygame.display.set_mode((windowsWidth, windowsHeight))
    pygame.display.set_caption("贪吃蛇") #设置窗口标题
    screen.fill(WHITE)
    snakeSpeedClock = pygame.time.Clock() # 创建Pygame时钟对象
    startGame(screen) #游戏开始

    while True:
        music=pygame.mixer.Sound("snake.wav")
        music.play(-1)
        runGame(screen, snakeSpeedClock)
        music.stop()
        gameOver(screen)
#游戏开始
def startGame(screen):
    gameStart = pygame.image.load("gameStart.png")
    screen.blit(gameStart, (70, 30))
    font = pygame.font.SysFont("SimHei", 40)
    tip = font.render("按任意键开始游戏", True, (65, 105, 225))
    screen.blit(tip, (240, 550))

    pygame.display.update()
    while True:  #键盘监听事件
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                terminate()     #终止程序
            elif event.type == pygame.KEYDOWN:
                if (event.key == pygame.K_ESCAPE):
                    terminate() #终止程序
                else:
                    return #结束此函数, 开始游戏
#游戏运行主体
def runGame(screen,snakeSpeedClock):
    startX = random.randint(3, mapWidth - 8) #开始位置
    startY = random.randint(3, mapHeight - 8)
    snakeCoords = [{"x": startX, "y": startY},  #初始贪吃蛇
                   {"x": startX - 1, "y": startY},
                   {"x": startX - 2, "y": startY}]
    direction = RIGHT       #  开始时向右移动
    food = {"x": random.randint(0, mapWidth - 1), "y": random.randint(0, mapHeight - 1)}     #食物随机位置
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                terminate()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT and direction != RIGHT:
                    direction = LEFT
                elif event.key == pygame.K_RIGHT  and direction != LEFT:
                    direction = RIGHT
                elif event.key == pygame.K_UP and direction != DOWN:
                    direction = UP
                elif event.key == pygame.K_DOWN and direction != UP:
                    direction = DOWN
                elif event.key == pygame.K_ESCAPE:
                    terminate()
        moveSnake(direction, snakeCoords) #移动贪吃蛇
        isEattingFood(snakeCoords, food) #判断贪吃蛇是否吃到食物
        ret = isAlive(snakeCoords) #判断贪吃蛇是否活着
        if not ret:
            break #贪吃蛇死了. 游戏结束

        gameRun = pygame.image.load("background.png")
        screen.blit(gameRun, (0, 0))
        drawFood(screen, food)
        drawSnake(screen, snakeCoords)
        drawScore(screen, len(snakeCoords) - 3)

        pygame.display.update()
        snakeSpeedClock.tick(snakeSpeed) #控制帧速率
#将食物画出来
def drawFood(screen, food):
    x = food["x"] * cellSize
    y = food["y"] * cellSize
    pygame.draw.rect(screen, YELLOW, (x, y, cellSize, cellSize))
#将贪吃蛇画出来
def drawSnake(screen, snakeCoords):
    for coord in snakeCoords:
        x = coord["x"] * cellSize
        y = coord["y"] * cellSize
        pygame.draw.rect(screen, DARKGREEN, (x, y, cellSize, cellSize)) #贪吃蛇外层的绿色
        pygame.draw.rect(screen, GREEN,(x + 4, y + 4, cellSize - 8, cellSize - 8)) #贪吃蛇里面的亮绿色
#画成绩
def drawScore(screen,score):
    font = pygame.font.SysFont("SimHei", 30)
    scoreSurf = font.render("得分: " + str(score), True, WHITE)
    scoreRect = scoreSurf.get_rect()
    scoreRect.topleft = (windowsWidth - 200, 50)
    screen.blit(scoreSurf, scoreRect)
#移动贪吃蛇
def moveSnake(direction, snakeCoords):
    if direction == UP:
        newHead = {"x": snakeCoords[HEAD]["x"], "y": snakeCoords[HEAD]["y"] - 1}
    elif direction == DOWN:
        newHead = {"x": snakeCoords[HEAD]["x"], "y": snakeCoords[HEAD]["y"] + 1}
    elif direction == LEFT:
        newHead = {"x": snakeCoords[HEAD]["x"] - 1, "y": snakeCoords[HEAD]["y"]}
    elif direction == RIGHT:
        newHead = {"x": snakeCoords[HEAD]["x"] + 1, "y": snakeCoords[HEAD]["y"]}
    snakeCoords.insert(0, newHead)
#判断贪吃蛇是否吃到食物
def isEattingFood(snakeCoords, food):
    if snakeCoords[HEAD]["x"] == food["x"] and snakeCoords[HEAD]["y"] == food["y"]:
        food["x"] = random.randint(0, mapWidth - 1)
        food["y"] = random.randint(0, mapHeight - 1) # 实物位置重新设置
    else:
        del snakeCoords[-1]  # 如果没有吃到实物, 就向前移动, 那么尾部一格删掉
#判断蛇死了没
def isAlive(snakeCoords):
    tag = True
    if snakeCoords[HEAD]["x"] == -1 or snakeCoords[HEAD]["x"] == mapWidth or snakeCoords[HEAD]["y"] == -1 or \
            snakeCoords[HEAD]["y"] == mapHeight:
        tag = False # 贪吃蛇碰壁
    for snake_body in snakeCoords[1:]:
        if snake_body["x"] == snakeCoords[HEAD]["x"] and snake_body["y"] == snakeCoords[HEAD]["y"]:
            tag = False # 贪吃蛇碰到自己身体
    return tag
#游戏结束信息显示
def gameOver(screen):
    #加载游戏结束图片
    screen.fill(WHITE)
    gameOve = pygame.image.load("gameover.png")
    screen.blit(gameOve, (0, 0))
    #加载游戏结束提示信息
    font = pygame.font.SysFont("SimHei", 36)
    tip = font.render("按Q或者ESC退出游戏, 按其他键重新开始游戏", True, (65, 105, 225))
    screen.blit(tip, (30, 500))
    #显示Surface对象上的内容
    pygame.display.update()
    while True:  #键盘监听事件
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                terminate()     #终止程序
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE or event.key == pygame.K_q:
                    terminate()
                else:
                    return #结束此函数, 重新开始游戏
#程序终止
def terminate():
    pygame.quit()
    sys.exit()
main()
